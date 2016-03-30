'use strict'

    function duckCount() {
      let args = Array.prototype.slice.call(arguments);
      return args.filter(function(argObj){
        return Object.prototype.hasOwnProperty.call(argObj, 'quack')
      }).length
    }

    module.exports = duckCount
