//basic server 
//install the express dependency and port for server.
var express = require('express');

var app = express();

var port = 5001;

app.get('/',function(request,response){
	response.send("Hello")
});

app.get('/book',function(request,response){
	response.send("books")
});
app.listen(port,function(err){
	console.log("server is running on port " + port);
})