
//LESSON 6
var mod = require('./mod.js');

// the list passed here has already been filtered for ext
mod(process.argv[2], process.argv[3], function(err, list){
  if (err){
    console.log('There was an error: ', err);
    return err;
  } 
  list.forEach(function(file){
    console.log(file);
  });
});  
