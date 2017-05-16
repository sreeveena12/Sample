var fs = require("fs");
//open a file and just check the file
console.log("opening file");
fs.open('text.txt','r+',function(err,res){
	if(err){
		return console.error(err);
	}
	console.log("file open");
});
//write in a file
console.log("going to write in a file");
fs.writeFile('text.txt','This is a file',function(err){
	if(err){
		return console.error(err);
	}
	//read a file
	fs.readFile('text.txt', function(err,data){
		if(err){
			return console.error(err);
		}
		console.log("Response:" + data.toString());
	});
});