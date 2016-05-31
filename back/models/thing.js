var mongoose = require('mongoose');

var ThingSchema = new mongoose.Schema({
   thingId: Number,
   category: String,
   name: String,
   city: String 
});

module.exports = mongoose.model('Thing', ThingSchema);