//LESSON 3
var fs = require('fs');

var getNewLines = function(){
  var bufferObj = fs.readFileSync(process.argv[2]);
  var str = bufferObj.toString();
  var arr = str.split('\n');
  return (arr.length - 1);
}

console.log(getNewLines());

    // note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
   

