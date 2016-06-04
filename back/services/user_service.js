var checkLogin = function(req, res, UserDAO){
    var userPost = req.body;

    var userDb = new UserDAO();
    userDb.email = userPost.email;
    userDb.password = userPost.password;

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

module.exports = {
    checkLogin: checkLogin
}