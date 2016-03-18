// LESSON 5
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var type = '.'+process.argv[3];

fs.readdir(dir, function(err, list){
  var filtered = list.filter(function(file){ 
    return path.extname(file) === type; 
  })
  console.log(filtered.join("\n"));
  return filtered.join("\n"); 
});
