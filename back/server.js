var cookieSession = require('cookie-session');
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = module.exports = express();

var EventDAO = require('./dao/event_dao');
var UserDAO = require('./dao/user_dao');
var ChatMessageDAO = require('./dao/chat_message_dao');

var UserService = require('./services/user_service');

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

var UserController = require('./controllers/user_controller')(app);



//EVENT
app.post("/event/add", function (req, res) {

    var eventDb = new EventDAO();
    // eventDb.name = eventPost.name;
    // eventDb.city = eventPost.city;
    // eventDb.category = eventPost.category;

    eventDb.set(req.body);
    eventDb.save(function (err, eventDb) {
        if (err) {
            console.error(err);
            res.send("err");
        }
        else {
            res.send("added");
        }
    })


    // console.log(eventDb);
    // console.log(req.body);
    // res.send("ok from back");
});

app.get("/event/list_all", function (req, res) {

    EventDAO.find(function (err, events) {
        if (err) {
            console.error(err);
            res.send("err");
        }
        else {
            res.send(events);
        }
    });
});


//CHAT
app.post("/chat/sendmessage", function (req, res) {
    var chatMessage = new ChatMessageDAO();

    chatMessage.set(req.body);
    chatMessage.save(function (err, chatMessage) {
        if (err) {
            console.error(err)
            res.send("err")
        }
        else{
            res.send("added");
            console.log("added");
        }
    })
});

app.get("/chat/listall", function(req, res){
    ChatMessageDAO.find(function(err, messages){
        if (err){
            console.error(err);
            res.send("err");
        }
        else{
            res.send(messages);
        }
    })
});


app.get("/", function(req, res){
    res.redirect("/static/pages/login.html");
})

// module.export()

var port = 8002;
app.listen(port);
console.log(`running on port ${port}`);