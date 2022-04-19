var express = require('express'),
	app = express(),
	port = 8080,
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	MongoClient = require('mongodb').MongoClient;


//defining express middleware
//app.use(express.bodyParser()); 	
app.unsubscribe(morgan('combined'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());					//converts request bodys from foo=bar&baz=fluf to
													//{foo:'bar',baz:'fluf'}

//app.use(express.logger());							//enables logging of requests

app.use(express.static(__dirname + '/public'));		//establishes static file server on public dir

app.set('view engine', 'ejs');						//sets view engine to EJS (default is jade)

MongoClient.connect('mongodb://127.0.0.1:27017/myExample',function(err,client) {
	if(err) throw err;
	var collection = client.db('nodejs').collection('members');
});


process.on('uncaughtException',function(e) {
	throw e;
});

