var express = require('express');
var app = express();
var path = require('path');
var account = require('./modules/account.js')

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/balance', function(req, res, next){
	res.send(account.balance())
})

app.listen(process.env.PORT || 3000, function(){});