# VeriDiff - Excel and Google Sheets Comparison Tool

This repository contains the VeriDiff website with improved Excel and Google Sheets comparison functionality.

## Features

- Automatic detection of numeric fields (including text-formatted numbers)
- User-driven column selection for comparison
- Focus on numeric differences that matter
- Fullstack implementation with Flask backend and React frontend

## Project Structure

- `/dist` - Built static files for the frontend
- `/public/api` - Flask backend API for file comparison
- `/src` - React frontend source code

## Setup Instructions

### Backend Setup

1. Navigate to the API directory:
   ```
   cd public/api
   ```

2. Install required Python packages:
   ```
   pip install -r requirements.txt
   ```

3. Start the Flask API server:
   ```
   python app.py
   ```
   This will start the API server on port 5000.

### Frontend Setup

1. The built frontend is already in the `/dist` directory.

2. To serve both frontend and API together, use the included Express server:
   ```
   node server.js
   ```
   This will start a server on port 3000 that serves the frontend and proxies API requests to the Flask backend.

## Deployment

For production deployment:

1. Deploy the Flask API on your server
2. Configure your web server to serve the static files from `/dist`
3. Set up API proxying to route `/api` requests to the Flask backend

## Development

If you need to make changes to the frontend:

1. Install dependencies:
   ```
   npm install
   ```

2. Make your changes in the `/src` directory

3. Build the project:
   ```
   npm run build
   ```

## Improved Comparison Logic

The comparison logic has been updated to:
- Properly detect numeric fields in both Excel and Google Sheets
- Handle text-formatted numbers consistently
- Focus on meaningful differences in numeric fields
- Allow user selection of columns to compare

## License

All rights reserved. This code is proprietary to VeriDiff.
