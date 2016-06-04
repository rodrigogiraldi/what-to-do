var UserDAO = require('../dao/user_dao');
var UserService = require('../services/user_service');

module.exports = function (app) {
    app.post("/user/checklogin", function (req, res) {
        UserService.checkLogin(req, res, UserDAO);
    });
}