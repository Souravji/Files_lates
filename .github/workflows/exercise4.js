var async = require('async');

 
/*async.waterfall([
  function(callback) {
  let a = 4;
  let b = 5
  let c = a+b
  console.log("First",c)
    callback(null,c);
  },
  function(arg1,callback) {
    
     let a = 5;
     let b = 1
     let c = a - b + arg1
     console.log("Second",c)
    callback(null,c);
  },
  function(c,callback) {
    
    let a = 2;
    let b = c;
    let d = a * b
    console.log("third",d)
    callback(null, d);
  }
], function(err, result) {
 
  console.log(result);
});*/
async.series([
  function(callback) {
    console.log('one');
    callback(null, 1);
  },
  function(callback) {
    console.log('two');
    callback(null, 2);
  },
  function(callback) {
    console.log('three');
    callback(null, 3);
  }
],
function(err, results) {
  console.log(results);
  // results is now equal to [1, 2, 3]
});



