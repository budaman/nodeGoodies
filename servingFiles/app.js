var express = require('express');
var app = express();

console.log(__dirname);
app.use('/cssFiles', express.static(__dirname + '/assets'));

//http://localhost:3000/cssFiles/myStyles.css you can reach file

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.listen(3000, function (){
  console.log("listen port 3000");
});
