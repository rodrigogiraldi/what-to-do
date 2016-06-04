var EventDAO = require('../dao/event_dao');

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

module.exports = {
    addEvent: addEvent,
    listAll: listAll
}