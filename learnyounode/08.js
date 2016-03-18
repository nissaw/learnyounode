// LESSON 8
var http = require('http');

var url = process.argv[2];

http.get(url, function(res){
  var str = '';
  res.setEncoding('utf8');
  res.on('data', function(data){
    str+=data;
  });
  res.on('end', function(){
    console.log(str.length);
    console.log(str);
  });
  res.on('error', console.error);
});

/* USING BUFFER-LIST  CONCAT-STREAM ANOTHER OPTION

var http = require('http')  
var bl = require('bl')  
  
http.get(process.argv[2], function (response) {  
  response.pipe(bl(function (err, data) {  
    if (err)  
      return console.error(err)  
    data = data.toString()  
    console.log(data.length)  
    console.log(data)  
  }))    
})  */
