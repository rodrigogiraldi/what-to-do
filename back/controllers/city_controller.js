var CityService = require('../services/city_service');

module.exports = function (app) {
    app.post("/city/add", function (req, res) {
        CityService.addCity(req, res);
    });
    
    app.post("/city/exist", function (req, res) {
        CityService.cityExist(req, res);
    });
}