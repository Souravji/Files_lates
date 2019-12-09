var myCallback = function(err, data, de) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('got data for 1: '+data+"         sdfsdfsd     "+de); // Otherwise proceed as usual.
};

var myCallbacktwo = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('myCallbacktwo : '+ data); // Otherwise proceed as usual.
};


var usingItNow = function(callback) {
       
   callback(null, 'First Function',"DEEEEEEEEEEEEEEEEEEE",'Second Functions');
   
   console.log("3rd Function");
     myCallbacktwo(null,'Second Functions');
};

usingItNow(myCallback);