var fun = require('./fun.js')

fun.doIt(4,function(err,result){
	console.log(result);
});
console.log(fun.add);
console.log(fun.sub);