var UserDAO = require('../dao/user_dao');

var checkLogin = function (req, res) {
    var userPost = req.body;

    UserDAO.find(userPost, function (err, users) {
        if (err) {
            console.error(err);
        }
        else {
            if (users.length == 0) {
                res.send("dados errados")
                console.log("dados errados");
            }
            else {
                console.log("login ok");
                req.session.user = userPost.email;
                res.send("login ok");
                // res.redirect("/");
            }
        }
    });
    // userDb.save(function(err, userDb){
    //    if(err) console.error(err); 
    // });

    // res.send("ok");
    // console.log(req.body);
    //checar login no banco
}

var userAdd = function (req, res) {
    var userPost = req.body;

    var userDb = new UserDAO();
    userDb.set(userPost);
    userDb.save(function(err, userDb){
       if(err){
           res.send("err");
       } 
       else{
           res.send("registered");
       }
    });
}

var retUser = function(req, res){
    console.log("chegou");
    res.send("retorno");
}

module.exports = {
    checkLogin: checkLogin,
    userAdd: userAdd,
    retUser: retUser
}