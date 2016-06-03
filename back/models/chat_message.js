var mongoose = require('mongoose');
 
var ChatMessageSchema = new mongoose.Schema({
    user: String,
    message: String
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);