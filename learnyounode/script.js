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
var http = require('http');

var url = process.argv[2];

http.get(url, function(res){
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
});


