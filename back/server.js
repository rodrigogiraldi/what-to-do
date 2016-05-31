var cookieSession = require('cookie-session');
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Thing = require('./models/thing');

var url = 'mongodb://localhost:27017/whattodo';

var app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['kasjhd3j7nbfasjh']
}))

app.use("/static", express.static("../front/web/public"));

app.get('/', function (req, res) {
    if (req.session.user == undefined) {
        res.redirect("/static/pages/login.html");
    }
    else {
        res.send("Logado");
    }
});

var port = 8002;
app.listen(port);
console.log(`running on port ${port}`);