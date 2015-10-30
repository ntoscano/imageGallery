var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
console.log('Running from localhost:3000');
app.use(express.static(__dirname + '/app'));
app.listen(port);