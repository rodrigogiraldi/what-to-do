var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Thing = require('./models/thing');

var url = 'mongodb://localhost:27017/whattodo';

var app = express();

app.get('/', function(req, res){
    res.send({msg: "ok"});
})

var port = 8002;
app.listen(port);
console.log(`running on port ${port}`);