var mongoose = require('mongoose');
 
var TipSchema = new mongoose.Schema({
    userEmail: String,
    message: String
});

module.exports('Tip', TipSchema);