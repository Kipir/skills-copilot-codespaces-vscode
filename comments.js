// Create web server
// Create a web server that listens on port 3000 and returns the contents of the comments.json file.
// The comments.json file contains an array of comments.
// When you visit http://localhost:3000 in your browser, the server should respond with the contents of the comments.json file.
// The server should return the comments as an array of objects, not as a string.
// If the comments.json file does not exist, the server should respond with a 404 error.
// If you visit any other URL, the server should respond with a 404 error.
// Use the comments.json file that is provided with this exercise.
// You can use the readFile function from the fs module to read the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('comments.json', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});