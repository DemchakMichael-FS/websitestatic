const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5876;
const BUILD_DIR = path.join(__dirname, 'build');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);

  // Normalize URL by removing query parameters and trailing slashes
  let url = req.url.split('?')[0];

  // If URL is '/', serve index.html
  if (url === '/') {
    url = '/index.html';
  }

  // Construct the file path
  const filePath = path.join(BUILD_DIR, url);

  // Get the file extension
  const extname = path.extname(filePath).toLowerCase();

  // Set the content type based on the file extension
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve 404 page
        fs.readFile(path.join(BUILD_DIR, '404.html'), (err, content) => {
          if (err) {
            // If 404 page is not found, send a simple 404 response
            res.writeHead(404);
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving static files from ${BUILD_DIR}`);
});
