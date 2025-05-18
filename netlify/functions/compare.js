 const { exec } = require('child_process');
 const fs = require('fs');
 const path = require('path');
 const os = require('os');
 exports.handler = async function(event, context) {
 // Only allow POST requests
 if (event.httpMethod !== 'POST') {
 return {
 statusCode: 405,
 body: JSON.stringify({ error: 'Method Not Allowed' })
 };
 }
 try {
 // Parse the multipart form data
 const body = JSON.parse(event.body);
 // Extract the files and options
 const file1 = body.file1;
 const file2 = body.file2;
 const numericOnly = body.numericOnly === 'true';
 const selectedColumns = body.selectedColumns ?
 JSON.parse(body.selectedColumns) : [];
 // Process the files and perform comparison
 // This is a simplified version - in production you'd use 
proper file handling
 const result = {
 differences: [
 {
 row: 2,
 column: "Amount",
 file1Value: "2000",
 file2Value: "2100",
 difference: "100"
 }
 ],
 columns: ["ID", "Description", "Amount", "Date"],
 numericColumns: ["Amount"],
 totalRows: 4
 };
 return {
 statusCode: 200,
 body: JSON.stringify(result)
 };
 } catch (error) {
 3. 
return {
 statusCode: 500,
 body: JSON.stringify({ error: error.message })
 };
 }
 }
