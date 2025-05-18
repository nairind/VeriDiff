#!/usr/bin/env python3
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import numpy as np
import json
import re
import sys
import os
import tempfile

app = Flask(__name__, static_folder='static')
CORS(app)

def is_numeric_string(value):
    """Check if a string value can be converted to a number"""
    if not isinstance(value, str):
        return False
    
    # Remove common formatting characters
    clean_value = re.sub(r'[,$%\s]', '', str(value))
    
    # Try to convert to float
    try:
        float(clean_value)
        return True
    except ValueError:
        return False

def convert_to_numeric(value):
    """Convert a value to numeric if possible"""
    if pd.isna(value):
        return np.nan
    
    if isinstance(value, (int, float)):
        return float(value)  # Convert all numbers to float for consistent comparison
    
    if isinstance(value, str):
        # Remove common formatting characters
        clean_value = re.sub(r'[,$%\s]', '', value)
        
        try:
            return float(clean_value)
        except ValueError:
            return value
    
    return value

def identify_potential_numeric_columns(df):
    """
    Identify columns that contain numeric values or text that could be numeric
    """
    numeric_cols = df.select_dtypes(include=['number']).columns.tolist()
    
    # Check text columns for numeric strings
    for col in df.select_dtypes(include=['object']).columns:
        # Sample the first 10 non-NA values (or fewer if there aren't 10)
        sample_values = df[col].dropna().head(10).tolist()
        
        # If more than 50% of sampled values are numeric strings, consider it a potential numeric column
        numeric_count = sum(1 for val in sample_values if is_numeric_string(val))
        if sample_values and numeric_count / len(sample_values) >= 0.5:
            numeric_cols.append(col)
    
    return numeric_cols

def normalize_dataframe(df, potential_numeric_cols):
    """
    Create a copy of the dataframe with potential numeric columns converted to numeric
    """
    df_normalized = df.copy()
    
    for col in potential_numeric_cols:
        if col in df.columns:
            df_normalized[col] = df_normalized[col].apply(convert_to_numeric)
    
    return df_normalized

def get_column_suggestions(df1, df2):
    """
    Get column suggestions for user selection
    Returns a list of common columns with their data types
    """
    common_cols = list(set(df1.columns).intersection(set(df2.columns)))
    
    # Identify potential numeric columns
    df1_numeric_cols = identify_potential_numeric_columns(df1)
    df2_numeric_cols = identify_potential_numeric_columns(df2)
    potential_numeric_cols = list(set(df1_numeric_cols).union(set(df2_numeric_cols)))  # Use union instead of intersection
    
    # Create suggestions
    suggestions = []
    for col in common_cols:
        is_numeric = col in potential_numeric_cols
        suggestions.append({
            "column": col,
            "is_potential_numeric": is_numeric,
            "recommended_for_comparison": is_numeric
        })
    
    return suggestions

def compare_dataframes(df1, df2, numeric_only=True, user_selected_columns=None):
    """
    Compare two dataframes and return differences
    If numeric_only is True, only compare numeric columns
    If user_selected_columns is provided, only compare those columns
    """
    # Ensure both dataframes have the same columns
    common_cols = list(set(df1.columns).intersection(set(df2.columns)))
    
    if not common_cols:
        return {"error": "No common columns found between the files"}
    
    # Create copies with only common columns
    df1_common = df1[common_cols].copy()
    df2_common = df2[common_cols].copy()
    
    # Identify potential numeric columns
    df1_numeric_cols = identify_potential_numeric_columns(df1_common)
    df2_numeric_cols = identify_potential_numeric_columns(df2_common)
    potential_numeric_cols = list(set(df1_numeric_cols).union(set(df2_numeric_cols)))  # Use union instead of intersection
    
    # Normalize dataframes (convert potential numeric columns to actual numeric)
    df1_normalized = normalize_dataframe(df1_common, potential_numeric_cols)
    df2_normalized = normalize_dataframe(df2_common, potential_numeric_cols)
    
    # Determine which columns to compare
    if user_selected_columns:
        # Use user-selected columns if provided
        compare_cols = [col for col in user_selected_columns if col in common_cols]
    elif numeric_only:
        # Use potential numeric columns if numeric_only is True
        compare_cols = potential_numeric_cols
    else:
        # Use all common columns
        compare_cols = common_cols
    
    if not compare_cols:
        return {"error": "No columns to compare based on current settings"}
    
    # Create a results dataframe
    results = []
    total_records = max(len(df1_normalized), len(df2_normalized))
    differences_found = 0
    within_tolerance = 0
    tolerance = 0.0  # Default tolerance
    
    # Compare row by row
    for i in range(min(len(df1_normalized), len(df2_normalized))):
        for col in compare_cols:
            row_results = {}
            
            # Use the first column as ID (usually a date or identifier)
            id_col = common_cols[0]
            row_results["ID"] = str(df1_normalized.iloc[i][id_col])
            
            val1 = df1_normalized.iloc[i][col]
            val2 = df2_normalized.iloc[i][col]
            
            # Convert values to float for comparison if they're numeric
            try:
                if not pd.isna(val1) and not pd.isna(val2):
                    if isinstance(val1, (int, float)) or (isinstance(val1, str) and is_numeric_string(val1)):
                        val1 = float(convert_to_numeric(val1))
                    if isinstance(val2, (int, float)) or (isinstance(val2, str) and is_numeric_string(val2)):
                        val2 = float(convert_to_numeric(val2))
            except:
                # If conversion fails, keep original values
                pass
            
            # Check if both values are numeric after normalization
            is_numeric1 = isinstance(val1, (int, float)) and not pd.isna(val1)
            is_numeric2 = isinstance(val2, (int, float)) and not pd.isna(val2)
            
            if is_numeric1 and is_numeric2:
                # Check if values are different beyond tolerance
                if abs(val1 - val2) > tolerance:
                    row_results["COLUMN"] = col
                    row_results["SOURCE_1_VALUE"] = str(val1)
                    row_results["SOURCE_2_VALUE"] = str(val2)
                    row_results["STATUS"] = "Different"
                    differences_found += 1
                    results.append(row_results)
                else:
                    within_tolerance += 1
            elif numeric_only:
                # Skip non-numeric comparisons if numeric_only is True
                continue
            elif val1 != val2:
                # For non-numeric values, only check equality
                row_results["COLUMN"] = col
                row_results["SOURCE_1_VALUE"] = str(val1)
                row_results["SOURCE_2_VALUE"] = str(val2)
                row_results["STATUS"] = "Different"
                differences_found += 1
                results.append(row_results)
    
    # Prepare summary
    summary = {
        "total_records": total_records,
        "differences_found": differences_found,
        "within_tolerance": within_tolerance,
        "potential_numeric_columns": potential_numeric_cols,
        "results": results
    }
    
    return summary

@app.route('/api/get_column_suggestions', methods=['POST'])
def api_get_column_suggestions():
    """API endpoint to get column suggestions for comparison"""
    if 'file1' not in request.files or 'file2' not in request.files:
        return jsonify({"error": "Both files are required"}), 400
    
    file1 = request.files['file1']
    file2 = request.files['file2']
    
    # Save files temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as temp1:
        file1.save(temp1.name)
        temp1_name = temp1.name
    
    with tempfile.NamedTemporaryFile(delete=False, suffix='.csv') as temp2:
        file2.save(temp2.name)
        temp2_name = temp2.name
    
    try:
        # Parse files
        df1 = pd.read_excel(temp1_name) if file1.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp1_name)
        df2 = pd.read_excel(temp2_name) if file2.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp2_name)
        
        # Get column suggestions
        suggestions = get_column_suggestions(df1, df2)
        
        return jsonify({
            "success": True,
            "suggestions": suggestions
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Clean up temporary files
        os.unlink(temp1_name)
        os.unlink(temp2_name)

@app.route('/api/compare_files', methods=['POST'])
def api_compare_files():
    """API endpoint to compare files (full version)"""
    if 'file1' not in request.files or 'file2' not in request.files:
        return jsonify({"error": "Both files are required"}), 400
    
    file1 = request.files['file1']
    file2 = request.files['file2']
    
    # Get parameters
    numeric_only = request.form.get('numeric_only', 'true').lower() == 'true'
    selected_columns = request.form.get('selected_columns', None)
    if selected_columns:
        try:
            selected_columns = json.loads(selected_columns)
        except:
            selected_columns = None
    
    # Save files temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as temp1:
        file1.save(temp1.name)
        temp1_name = temp1.name
    
    with tempfile.NamedTemporaryFile(delete=False, suffix='.csv') as temp2:
        file2.save(temp2.name)
        temp2_name = temp2.name
    
    try:
        # Parse files
        df1 = pd.read_excel(temp1_name) if file1.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp1_name)
        df2 = pd.read_excel(temp2_name) if file2.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp2_name)
        
        # Compare files
        results = compare_dataframes(df1, df2, numeric_only, selected_columns)
        
        return jsonify({
            "success": True,
            "results": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Clean up temporary files
        os.unlink(temp1_name)
        os.unlink(temp2_name)

@app.route('/api/compare_files_demo', methods=['POST'])
def api_compare_files_demo():
    """API endpoint to compare files (demo version with limitations)"""
    if 'file1' not in request.files or 'file2' not in request.files:
        return jsonify({"error": "Both files are required"}), 400
    
    file1 = request.files['file1']
    file2 = request.files['file2']
    
    # Check file size for demo version (limit to 100KB)
    if file1.content_length > 100 * 1024 or file2.content_length > 100 * 1024:
        return jsonify({
            "error": "File size exceeds demo limit of 100KB. Please sign up for full access."
        }), 400
    
    # Get parameters
    numeric_only = request.form.get('numeric_only', 'true').lower() == 'true'
    
    # Save files temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as temp1:
        file1.save(temp1.name)
        temp1_name = temp1.name
    
    with tempfile.NamedTemporaryFile(delete=False, suffix='.csv') as temp2:
        file2.save(temp2.name)
        temp2_name = temp2.name
    
    try:
        # Parse files
        df1 = pd.read_excel(temp1_name) if file1.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp1_name)
        df2 = pd.read_excel(temp2_name) if file2.filename.endswith(('.xlsx', '.xls')) else pd.read_csv(temp2_name)
        
        # Compare files
        results = compare_dataframes(df1, df2, numeric_only)
        
        # For demo, limit the number of differences shown
        if results and "results" in results:
            full_count = len(results["results"])
            results["results"] = results["results"][:3]  # Show only first 3 differences
        
        return jsonify({
            "success": True,
            "results": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Clean up temporary files
        os.unlink(temp1_name)
        os.unlink(temp2_name)

# Serve static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
