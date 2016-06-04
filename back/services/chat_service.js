var ChatDAO = require('../dao/chat_dao');

var sendMessage = function (req, res) {
    var chatMessage = new ChatDAO();

    chatMessage.set(req.body);
    chatMessage.save(function (err, chatMessage) {
        if (err) {
            console.error(err)
            res.send("err")
        }
        else {
            res.send("added");
            console.log("added");
        }
    })
};

var listAll = function(req, res){
    ChatDAO.find(function(err, messages){
        if (err){
            console.error(err);
            res.send("err");
        }
        else{
            res.send(messages);
        }
    })    
}

module.exports = {
    sendMessage: sendMessage,
    listAll: listAll
}