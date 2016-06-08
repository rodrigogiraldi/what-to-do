var EventService = require('../services/event_service')

module.exports = function(app){
    app.post("/event/add", function (req, res) {
        EventService.addEvent(req, res);
    });
    
    app.get("/event/list_all", function (req, res) {
        EventService.listAll(req, res);
    });
    
    app.get("/event/list_coordinates", function(req, res){
        EventService.listCoordinates(req, res);
    });
}