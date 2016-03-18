'use strict'
//LESSON 13 JSON API SERVER
const http = require('http');
const url = require('url');

let sendJSON = (date) => { 
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
};

let sendUNIX = (date) => {
  return {
    unixtime: date.getTime()
  }
};

let server = http.createServer( (req, res) => {
  let parsedURL = url.parse( req.url, true );
  let time = new Date( parsedURL.query.iso );
  let result;

  if( url.parse( req.url, true ).pathname === '/api/parsetime' ){
    result = sendJSON( time );  
  } else if( url.parse( req.url, true ).pathname === '/api/unixtime' ){
    result = sendUNIX( time );
  }

  if (result){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);





















