// modules =================================================
var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
//var mongoose       = require('mongoose');
var cookieParser = require('cookie-parser');
var ws 			 = require('nodejs-websocket');
var path 		 = require('path');

//set port
var port = process.env.PORT || 8000;

//connect to mongoDB database
//mongoose.connect(db.url);

// read cookies (needed for auth)
//app.use(cookieParser());
//get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set the static files location
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

var server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received: " + str);
    	server.connections.forEach(function (conn) {
    		console.log("Send: " + str);
        	conn.sendText(str);
    	});
        //conn.sendText(str.toUpperCase()+"!!!");
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    });
}).listen(8001);

// start app
// startup app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);
