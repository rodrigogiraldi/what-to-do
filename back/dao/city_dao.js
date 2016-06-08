var mongoose = require('mongoose');
 
var CitySchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number
});

module.exports = mongoose.model('City', CitySchema);