const busboy = require('busboy');

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the multipart form data
    const formData = await parseMultipartForm(event);
    
    // Mock comparison results
    const results = {
      total_records: 5,
      differences_found: 3,
      within_tolerance: 0,
      potential_numeric_columns: ["Amount", "Quantity", "Price", "Total"],
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
          SOURCE_1_VALUE: "50.00",
          SOURCE_2_VALUE: "55.00",
          STATUS: "difference"
        },
        {
          ID: "4",
          COLUMN: "Quantity",
          SOURCE_1_VALUE: "10",
          SOURCE_2_VALUE: "12",
          STATUS: "difference"
        },
        {
          ID: "5",
          COLUMN: "Total",
          SOURCE_1_VALUE: "500",
          SOURCE_2_VALUE: "500",
          STATUS: "match"
        }
      ]
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ results })
    };
  } catch (error) {
    console.error('Error processing files:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to compare files', details: error.message })
    };
  }
};

// Function to parse multipart form data
function parseMultipartForm(event) {
  return new Promise((resolve, reject) => {
    const formData = {
      files: {},
      fields: {}
    };

    // If no body or content-type, return empty form data
    if (!event.body || !event.headers['content-type']) {
      return resolve(formData);
    }

    const bb = busboy({ 
      headers: { 
        'content-type': event.headers['content-type'] || event.headers['Content-Type'] 
      }
    });

    // Handle file uploads
    bb.on('file', (fieldname, file, info) => {
      const { filename, encoding, mimeType } = info;
      let fileContent = '';
      
      file.on('data', (data) => {
        fileContent += data.toString();
      });
      
      file.on('end', () => {
        formData.files[fieldname] = {
          filename,
          content: fileContent,
          encoding,
          mimeType
        };
      });
    });

    // Handle regular form fields
    bb.on('field', (fieldname, value) => {
      formData.fields[fieldname] = value;
    });

    // Handle parsing completion
    bb.on('finish', () => {
      resolve(formData);
    });

    // Handle errors
    bb.on('error', (error) => {
      reject(error);
    });

    // Parse the request body
    const bodyBuffer = Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8');
    bb.write(bodyBuffer);
    bb.end();
  });
}
