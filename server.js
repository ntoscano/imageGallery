var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
console.log('running');
app.use(express.static(__dirname + '/app'));
app.listen(port);