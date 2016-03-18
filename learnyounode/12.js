'use strict'
// LESSON 12 HTTP UPPERCASRER
const http = require('http');
const map = require('through2-map');

let port = Number(process.argv[2]);

let upperCaserer = map(function(chunk) {
  return chunk.toString().toUpperCase(); 
});

let server = http.createServer((req, res) => {
  
  if (req.method != 'POST') { 
      return res.end('send me a POST\n') ;
  }

  req.pipe(upperCaserer).pipe(res);

});

server.listen(port);