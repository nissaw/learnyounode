// Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement a logging function that prepends a namespace string to its output.
'use strict'

function logger(namespace) {
  return function(){
    var args = Array.prototype.slice.call(arguments);
    var newArgs = [namespace].concat(args)
    console.log.apply(console, newArgs)
  }
}

module.exports = logger
