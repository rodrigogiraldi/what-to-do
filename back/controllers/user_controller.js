var UserDAO = require('../dao/user_dao');
var UserService = require('../services/user_service');

module.exports = function (app) {
    app.get("/use", function (req, res) {
        res.send("Use");
    });
}

// // var server = require('../server');
// // var app = server.app;// console.log(app);
// // app.get("/use", function (req, res) {
// //     res.send("Use");
// // })

// // // module.exports = {
// // //     userGet: userGet
// // // }