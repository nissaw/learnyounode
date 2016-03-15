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

