// LESSON 2
var sumArgs = function(){
  var args = Array.prototype.slice.call(process.argv, 2);
  return args.reduce(function(a,b){ return +a + +b });
}

console.log(sumArgs());
