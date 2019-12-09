var getEmpObj = function (one,data,callback) {
        result = "Lingeswaran M        " + data+"-------------"+ one;
        callback(result);
    
}


var updateEmpAddress = function (result) {
    
    console.log("Call Back function is called", result);
           
   
}

getEmpObj("Rajesh","params",updateEmpAddress); 

