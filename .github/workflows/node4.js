var async1 = require('async');

asyncSeries1 = function (req, res, callback) {

    var sharedData = "Data from : ";
    async1.series([
            // First function
            function(callback) {
                sharedData = "First Callback";
                callback();
            },
            // Second function
            function(callback){
                console.log("First",sharedData);
                sharedData = "Second Callback";
                
                callback();
            },
             //third function
 		function(callback){
               console.log("Second callback",sharedData)


               callback();
            }
        ],
       
    );
};


asyncSeries1();