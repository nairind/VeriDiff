const busboy = require('busboy');
const fs = require('fs');
const path = require('path');
const os = require('os');

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  return new Promise((resolve, reject) => {
    const bb = busboy({ headers: event.headers });
    const tmpdir = os.tmpdir();
    const files = {};
    const fields = {};

    bb.on('file', (fieldname, file, info) => {
      const { filename, encoding, mimeType } = info;
      const filepath = path.join(tmpdir, filename);
      files[fieldname] = {
        filepath,
        filename,
        encoding,
        mimeType
      };
      
      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);
    });

    bb.on('field', (fieldname, val) => {
      fields[fieldname] = val;
    });

    bb.on('finish', async () => {
      try {
        // For demo purposes, return a mock comparison result
        // In a real implementation, you would analyze the files here
        
        const mockResults = {
          total_records: 10,
          differences_found: 3,
          within_tolerance: 0,
          potential_numeric_columns: ["Amount", "Quantity", "Price"],
          results: [
            {
              ID: "1",
              COLUMN: "Amount",
              SOURCE_1_VALUE: "1000",
              SOURCE_2_VALUE: "1000",
              STATUS: "match"
            },
            {
              ID: "2",
              COLUMN: "Amount",
              SOURCE_1_VALUE: "2000",
              SOURCE_2_VALUE: "2100",
              STATUS: "difference"
            },
            {
              ID: "3",
              COLUMN: "Price",
              SOURCE_1_VALUE: "45.50",
              SOURCE_2_VALUE: "45.00",
              STATUS: "difference"
            }
          ]
        };

        // Clean up temporary files
        for (const fileObj of Object.values(files)) {
          fs.unlinkSync(fileObj.filepath);
        }

        resolve({
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            results: mockResults
          })
        });
      } catch (error) {
        console.error('Error processing files:', error);
        resolve({
          statusCode: 500,
          headers,
          body: JSON.stringify({
            success: false,
            error: 'Failed to process files: ' + error.message
          })
        });
      }
    });

    bb.on('error', (err) => {
      console.error('Error parsing form data:', err);
      resolve({
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Failed to parse form data: ' + err.message
        })
      });
    });

    // Convert the base64 body to a buffer if it's base64 encoded
    const bodyBuffer = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : event.body;

    bb.end(bodyBuffer);
  });
};
