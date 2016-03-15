//LESSON 1
// console.log('HELLO WORLD');

// LESSON 2
// var sumArgs = function(){
//   var args = Array.prototype.slice.call(process.argv, 2);
//   return args.reduce(function(a,b){ return +a + +b });
// }

// console.log(sumArgs());

//LESSON 3
/*var fs = require('fs');

var getNewLines = function(){
  var bufferObj = fs.readFileSync(process.argv[2]);
  var str = bufferObj.toString();
  var arr = str.split('\n');
  return (arr.length - 1);
}

    // note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
   


console.log(getNewLines());*/

// LESSON 4
// var fs = require('fs');

// fs.readFile(process.argv[2], 'utf8', function(err, data){
//   var lines = data.split('\n').length - 1;
//   console.log(lines);
//   return lines;
// });

// LESSON 5
// var fs = require('fs');
// var path = require('path');

// var dir = process.argv[2];
// var type = '.'+process.argv[3];

// fs.readdir(dir, function(err, list){
//   var filtered = list.filter(function(file){ 
//     return path.extname(file) === type; 
//   })
  // console.log(filtered.join("\n"));
  // return filtered.join("\n"); 
// });

//LESSON 6
// var mod = require('./mod.js');

// // the list passed here has already been filtered for ext
// mod(process.argv[2], process.argv[3], function(err, list){
//   if (err){
//     console.log('There was an error: ', err);
//     return err;
//   } 
//   list.forEach(function(file){
//     console.log(file);
//   });
// });  

//LESSON 7
// var http = require('http');

// var url = process.argv[2];

// http.get(url, function(res){
//   res.setEncoding('utf8');
//   res.on('data', console.log);
//   res.on('error', console.error);
// });

// LESSON 8
// var http = require('http');

// var url = process.argv[2];

// http.get(url, function(res){
//   var str = '';
//   res.setEncoding('utf8');
//   res.on('data', function(data){
//     str+=data;
//   });
//   res.on('end', function(){
//     console.log(str.length);
//     console.log(str);
//   });
//   res.on('error', console.error);
// });

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


// optimizting
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
          //    httpGet(index + 1);
          // } 
//   });
// };


//OFFICIAL SOLUTION
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


