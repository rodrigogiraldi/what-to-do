var EventDAO = require('../dao/event_dao');
var CityDAO = require('../dao/city_dao');

var addEvent = function (req, res) {
    var eventDb = new EventDAO();

    eventDb.set(req.body);
    eventDb.save(function (err, eventDb) {
        if (err) {
            console.error(err);
            res.send("err");
        }
        else {
            res.send("added");
        }
    })
    
    // console.log(req.body.city);
    
    // CityDAO.find({name: req.body.city},(function(err, cities){
    //     if(cities.length == 0){
    //         addCity()
    //     }
    // }));
    
    // res.send("ok");
}

var listAll = function (req, res) {
    EventDAO.find(function (err, events) {
        if (err) {
            console.error(err);
            res.send("err");
        }
        else {
            res.send(events);
        }
    });
}

// var addCity = function(req, res){
//     var cityDb = new CityDAO();
    
//     cityDb.set(req.body);
    
//     cityDb.save(function (err, cityDb) {
//         if (err) {
//             res.send("not added");
//             console.err(err);
//         }
//         else {
//             res.send("added");
//         }
//     });    
// }

var listCoordinates = function (req, res) {

    CityDAO.find(function(err, cities){
        if (err){
            console.err(err);
            res.send("err");
        }
        else{
            res.send(cities);
        }
    });
    
    // var cityDb = new CityDAO();
    // cityDb.name = "Londrina";
    // cityDb.lat = -23.3044524;
    // cityDb.lng = -51.1695824;
    
    // cityDb.save(function (err, cityDb) {
    //     if (err) {
    //         res.send("not added");
    //         console.err(err);
    //     }
    //     else {
    //         res.send("added");
    //     }
    // });
}

module.exports = {
    addEvent: addEvent,
    listAll: listAll,
    listCoordinates: listCoordinates
}