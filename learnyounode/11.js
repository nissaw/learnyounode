'use strict'
// LESSON 11 HTTP FILE SERVER 
const http = require('http');
const fs = require('fs');

let port = Number(process.argv[2]);
let filePath = process.argv[3];

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  var stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(port);

