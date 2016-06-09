var UserService = require('../services/user_service');

module.exports = function (app) {
    app.post("/user/checklogin", function (req, res) {
        UserService.checkLogin(req, res);
    });

    app.post("/user/add", function (req, res) {
        UserService.userAdd(req, res);
    });
    
    app.get("/user/ret", function(req, res){
        UserService.retUser(req, res);
    });
}
