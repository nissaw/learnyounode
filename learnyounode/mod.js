var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, cb){  
  fs.readdir(dir, function(err, list){
    if (err){
      return cb(err);
    }
    else {
      // do stuff to the list
      list = list.filter(function(file){
        return path.extname(file) === '.'+ext;
      });
      return cb(null, list);
    }
  }); 
};
