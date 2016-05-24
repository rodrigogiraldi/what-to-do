var express = require('express');
// var mongodb = require('mongodb');

var app = express();

app.get('/thing/listall', function(req, res){
    res.send("list");
});

var port = 8081;
var server = app.listen(port, function(){
    console.log("Running on port " + port + "...");
});