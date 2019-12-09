var async1 = require('async');


var myCallback = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('got data for 1: '+data); // Otherwise proceed as usual.
};


var usingItNow = function(callback) {
  var err = new Error('First Function');    
    
 
   callback(null, 'First Function');
   
   console.log("3rd Function");
     
};






function asyncSeries1(req, res, callback) {

    var sharedData = "Data from : ";
    async1.series([
            // First function
            (callback)=>{
                sharedData = "First Callback";
               callback();
            },
            // Second function
           (callback)=>{
                console.log("First Call Back Function",sharedData);
                sharedData = "Second Callback";
                callback();
                
                
            },
             //third function
 		(callback)=>{
                console.log("Second callback function",sharedData)
                usingItNow(myCallback);
                
            }
        ],
       
    );
};


//module.exports = {
  //asyncSeries1
//};

asyncSeries1();