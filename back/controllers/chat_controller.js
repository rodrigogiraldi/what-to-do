var ChatService = require('../services/chat_service');

module.exports = function (app) {
    app.post("/chat/sendmessage", function (req, res) {
        ChatService.sendMessage(req, res);
    });
    
    app.get("/chat/listall", function(req, res){
        ChatService.listAll(req, res);
    });
}
