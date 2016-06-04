var cookieSession = require('cookie-session');
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = module.exports = express();

var url = 'mongodb://localhost:27017/whattodo';

app.use(cookieSession({
    name: 'session',
    keys: ['kasjhd3j7nbfasjh']
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("../front/web/public"));
app.use("/static", express.static("../front/web/static"));

mongoose.connect(url);

var ChatController = require('./controllers/chat_controller')(app);
var EventController = require('./controllers/event_controller')(app);
var UserController = require('./controllers/user_controller')(app);


app.get("/", function(req, res){
    res.redirect("/static/pages/login.html");
})

// module.export()

var port = 8002;
app.listen(port);
console.log(`running on port ${port}`);