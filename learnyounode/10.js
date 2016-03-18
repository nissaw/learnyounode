//LESSON 10
// should attempt refactor using 
// https://github.com/samsonjs/strftime

var net = require('net');

var port = Number(process.argv[2]);

var zeroPad = function(val){
  return (val < 10 ? '0' : '') + val;
};

// function to create format "2013-07-06 17:42" 
var setDate = function(){ 
  var date = new Date();
  var result = "";
  return date.getFullYear() + '-' 
  + zeroPad(date.getMonth()+1) + '-' 
  + zeroPad(date.getDate()) + ' ' 
  + zeroPad(date.getHours()) + ':' 
  + zeroPad(date.getMinutes());
};

var server = net.createServer(function(socket){
  console.log('client connected');
  // this line is the same as the 2 lines commented out
  socket.end(setDate() + '\n');
  // socket.write(setDate() + '\n');
  // socket.end();
});

server.listen(port);

