import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

interface ComparisonResult {
  ID: string;
  COLUMN: string;
  SOURCE_1_VALUE: string;
  SOURCE_2_VALUE: string;
  STATUS: string;
}

interface ComparisonSummary {
  total_records: number;
  differences_found: number;
  within_tolerance: number;
  potential_numeric_columns: string[];
  results: ComparisonResult[];
}

const FileComparisonSection: React.FC = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comparisonResults, setComparisonResults] = useState<ComparisonSummary | null>(null);
  const [step, setStep] = useState<'upload' | 'column-select' | 'results'>('upload');
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [numericOnly, setNumericOnly] = useState(true);
  const [tolerance, setTolerance] = useState(0);
  
  const fileInput1Ref = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile1(e.target.files[0]);
    }
  };

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile2(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file1 || !file2) {
      setError('Please select both files for comparison');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file1', file1);
      formData.append('file2', file2);
      
      // Updated API endpoint to use Netlify Functions
      const response = await fetch('/.netlify/functions/compare', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to compare files');
      }

      if (data.results && data.results.potential_numeric_columns) {
        setSelectedColumns(data.results.potential_numeric_columns);
      }
      
      setComparisonResults(data.results);
      setStep('column-select');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleColumnSelect = (column: string) => {
    setSelectedColumns(prev => 
      prev.includes(column) 
        ? prev.filter(c => c !== column) 
        : [...prev, column]
    );
  };

  const handleCompare = async () => {
    if (!comparisonResults) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file1', file1!);
      formData.append('file2', file2!);
      formData.append('columns', JSON.stringify(selectedColumns));
      formData.append('numeric_only', numericOnly.toString());
      formData.append('tolerance', tolerance.toString());
      
      // Updated API endpoint to use Netlify Functions
      const response = await fetch('/.netlify/functions/compare', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to compare files');
      }

      setComparisonResults(data.results);
      setStep('results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const resetComparison = () => {
    setFile1(null);
    setFile2(null);
    setComparisonResults(null);
    setStep('upload');
    setError(null);
    setSelectedColumns([]);

    // Reset file inputs
    if (fileInput1Ref.current) fileInput1Ref.current.value = '';
    if (fileInput2Ref.current) fileInput2Ref.current.value = '';
  };

  return (
    <section id="file-comparison" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Compare Your Files
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Upload your Excel and Google Sheets files to identify differences
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {step === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <Label htmlFor="file1" className="block text-sm font-medium text-gray-700 mb-1">
                Excel File
              </Label>
              <input
                ref={fileInput1Ref}
                id="file1"
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFile1Change}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {file1 && <p className="mt-1 text-sm text-gray-500">{file1.name}</p>}
            </div>

            <div className="mb-8">
              <Label htmlFor="file2" className="block text-sm font-medium text-gray-700 mb-1">
                Google Sheet (CSV)
              </Label>
              <input
                ref={fileInput2Ref}
                id="file2"
                type="file"
                accept=".csv"
                onChange={handleFile2Change}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {file2 && <p className="mt-1 text-sm text-gray-500">{file2.name}</p>}
            </div>

            <Button
              onClick={handleUpload}
              disabled={!file1 || !file2 || isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? 'Processing...' : 'Upload Files'}
            </Button>
          </div>
        )}

        {step === 'column-select' && comparisonResults && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-6">
              <p className="font-semibold">Files uploaded successfully!</p>
              <p>Select which columns to compare:</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Checkbox 
                  id="numeric-only" 
                  checked={numericOnly}
                  onCheckedChange={(checked) => setNumericOnly(checked as boolean)}
                />
                <Label htmlFor="numeric-only" className="ml-2">
                  Only compare numeric fields
                </Label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {comparisonResults.potential_numeric_columns.map((column) => (
                  <div key={column} className="flex items-center">
                    <Checkbox 
                      id={`column-${column}`}
                      checked={selectedColumns.includes(column)}
                      onCheckedChange={() => handleColumnSelect(column)}
                    />
                    <Label htmlFor={`column-${column}`} className="ml-2">
                      {column}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={resetComparison}
                className="bg-gray-600 hover:bg-gray-700"
              >
                Back
              </Button>
              <Button
                onClick={handleCompare}
                disabled={selectedColumns.length === 0 || isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? 'Processing...' : 'Compare Selected Columns'}
              </Button>
            </div>
          </div>
        )}

        {step === 'results' && comparisonResults && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Comparison Complete</p>
                  <p>Total Records: {comparisonResults.total_records}</p>
                </div>
                <div className="text-right">
                  <p>Differences Found: {comparisonResults.differences_found}</p>
                  <p>Within Tolerance: {comparisonResults.within_tolerance}</p>
                </div>
              </div>
            </div>

            {comparisonResults.results.length > 0 ? (
              <div className="bg-white shadow overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Row ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Column
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Excel Value
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Google Sheet Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comparisonResults.results.map((result, index) => (
                      <tr key={index} className={result.STATUS === 'difference' ? 'bg-red-50' : 'hover:bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {result.ID}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {result.COLUMN}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {result.SOURCE_1_VALUE}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {result.SOURCE_2_VALUE}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                <p className="font-semibold">No differences found!</p>
                <p>The values in both files match perfectly.</p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Button
                onClick={resetComparison}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Compare Different Files
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FileComparisonSection;

