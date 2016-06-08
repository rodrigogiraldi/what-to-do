var CityDAO = require('../dao/city_dao');

var addCity = function(req, res){
    var cityDb = new CityDAO();
    
    cityDb.set(req.body);
    
    cityDb.save(function (err, cityDb) {
        if (err) {
            res.send("not added");
            console.err(err);
        }
        else {
            res.send("added");
        }
    });    
}

var cityExist = function (req, res) {
    var cityName = req.body.city;
    console.log(cityName);

    CityDAO.find({ name: cityName }, function (err, cities) {
        if (cities.length > 0){
            res.send("city exist");
        }
        else{
            res.send("city not exist");
        }
    });
}

module.exports = {
    cityExist: cityExist,
    addCity: addCity
}