var exec = require('child_process').exec;
var cmdss = ('node -v','dir *');


var getEmpObj = function (callback) {
 exec('node -v && dir * && type exe1.js', function(error, result, stderr) {

if(error){

throw error;

}

callback(result);

});
}

var updateEmpAddress = function (result) {
    
    console.log("Call Back function is called", result);
           
   
}

getEmpObj(updateEmpAddress); 

