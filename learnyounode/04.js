
// LESSON 4
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
  var lines = data.split('\n').length - 1;
  console.log(lines);
  return lines;
});
