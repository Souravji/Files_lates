function serverRequest(){
  
    var response = "The glass is half full ";
    return response;
  
}

function getResults(){
  var test = serverRequest();
  console.log("Response from the server: " + test);
}


getResults();