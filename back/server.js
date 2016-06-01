var cookieSession = require('cookie-session');
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Thing = require('./models/thing');
var User = require('./models/user');

var url = 'mongodb://localhost:27017/whattodo';

var app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['kasjhd3j7nbfasjh']
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/public", express.static("../front/web/public"));
app.use("/static", express.static("../front/web/static"));

//LOGIN
mongoose.connect(url);
app.post("/user/checklogin", function (req, res) {
    var userPost = req.body;

    var userDb = new User();
    userDb.email = userPost.email;
    userDb.password = userPost.password;

    User.find(userPost, function (err, users) {
        if (err) {
            console.error(err);
        }
        else{
            console.log(users);
        }
    });
    // userDb.save(function(err, userDb){
    //    if(err) console.error(err); 
    // });

    res.send("ok");
    console.log(req.body);
    //checar login no banco
})

// app.get('/', function (req, res) {
//     if (req.session.user == undefined) {
//         res.redirect("/static/pages/login.html");
//     }
//     else {
//         res.send("Logado");
//     }
// });

var port = 8002;
app.listen(port);
console.log(`running on port ${port}`);