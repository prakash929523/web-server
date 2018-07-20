var express = require('express');
var app = express();
var PORT = 3000;
//object middleware
//route level middleware
var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger : function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' +req.method+ '' + req.originalUrl);
		next();
	}
};


//whenever route occure private route can hit every time
app.use(middleware.requireAuthentication);

app.use(middleware.logger);

//get have 2 aruguments
app.get('/', function(req, res){
	res.send('hello express');
} );

app.get('/about', function(req, res){
	res.send('about us !!!!');
});

//===================================
//this is also middleware (here app.use(express.static )) used for get index.html
app.use(express.static(__dirname + '/public'));

// console.log(__dirname);
app.listen(PORT, function(){
	console.log('express server started'+ PORT +'!!');
});