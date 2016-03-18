//LESSON 9
var http = require('http');


// req 1
http.get(process.argv[2], function(res){
  var str = '';
  res.on('error', console.error);
  res.setEncoding('utf8');
  res.on('data', function(data){
    str+=data;
  });
  res.on('end', function(){
    console.log(str);
    // req 2
    http.get(process.argv[3], function(res){
      var str = '';
      res.on('error', console.error);
      res.setEncoding('utf8');
      res.on('data', function(data){
        str+=data;
      });
      res.on('end', function(){
        console.log(str);
        // req 3
        http.get(process.argv[4], function(res){
          var str = '';
          res.on('error', console.error);
          res.setEncoding('utf8');
          res.on('data', function(data){
            str+=data;
          });
          res.on('end', function(){
              console.log(str);
          });
        });
      });
    });
  });
});


// ALTERNATE

// var index = 0;
// var httpGet = function(index){
//   http.get(process.argv[2+index], function(res){
//     var str = '';
//     res.on('error', console.error);
//     res.setEncoding('utf8');
//     res.on('data', function(data){
//       str+=data;
//     });
//     res.on('end', function(){
//       console.log(str);
          // index++;
          // if (index < 3){
          //    httpGet(index + 1          // } );

//   });
// };


// USING BL
// var http = require('http')  
// var bl = require('bl')  
// var results = []  
// var count = 0  
  
// function printResults () {  
//   for (var i = 0; i < 3; i++)  
//     console.log(results[i])  
// }  
  
// function httpGet (index) {  
//   http.get(process.argv[2 + index], function (response) {  
//     response.pipe(bl(function (err, data) {  
//       if (err)  
//         return console.error(err)  
  
//       results[index] = data.toString()  
//       count++  
  
//       if (count == 3)  
//         printResults()  
//     }))  
//   })  
// }  
  
// for (var i = 0; i < 3; i++)  
//   httpGet(i) 
