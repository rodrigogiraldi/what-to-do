var express = require('express');
var mongodb = require('mongodb');

//MONGO
var url = 'mongodb://localhost:27017/whattodo';
    
var MongoClient = mongodb.MongoClient;
MongoClient.connect(url, function(err, db){
    var collection = db.collection('users');
    var documents = collection.find().toArray(function(err, results){
       console.log(results); 
    });
});

// app.get('/thing/listall', function(req, res){
//     res.send("list");
// });

//EXPRESS
var app = express();

app.post('/user/check', function(req, res){
    res.send({msg: "ok"});
    console.log("user check");
    // console.log(req);
})

var port = 8081;
var server = app.listen(port, function(){
    console.log("Running on port " + port + "...");
});