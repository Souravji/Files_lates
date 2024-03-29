var async = require('async');

 
function takes5Seconds(callback) {
    console.log('Starting 5 second task');
    setTimeout( function() { 
        console.log('Just finshed 5 seconds');
        callback(null, 'five');
    }, 5000);
}   

function takes2Seconds(callback) {
    console.log('Starting 2 second task');
    setTimeout( function() { 
        console.log('Just finshed 2 seconds');
        callback(null, 'two');
    }, 2000); 
}  

function takes3Seconds(callback) {
    console.log('Starting 3 second task');
    setTimeout( function() { 
        console.log('Just finshed 3 seconds');
        callback(null, 'three');
    }, 3000); 
}  

async.series([
   
    takes2Seconds,
    takes3Seconds,
    takes5Seconds
    
    
], function (err, results) {
    // Here, results is an array of the value from each function
    console.log(results); // outputs: ['two', 'five']
});