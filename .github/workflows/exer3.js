var spawn = require('child_process').spawn;
var child = spawn('node -v && type exe1.js', {
  shell: true
});
child.stderr.on('data', function (data) {
  console.error("STDERR:", data.toString());
});
child.stdout.on('data', function (data) {
   
//console.log(data.toString());
   
var a = data.toString();
var c = a.split('\n');
var d = c.splice(0,1);
var newtext = d.join('\n');

//var c = a.split(('\n'));
//var d = f.split('\n');   
//
// join the array back into a single string

console.log(newtext);

   
});

child.on('exit', function (exitCode) {
  console.log("Child exited with code: " + exitCode);
});

