var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
   category: String,
   name: String,
   city: String 
});

module.exports = mongoose.model('Event', EventSchema);