app.controller("EventCtrl", function($scope, $http){
    var Event = function () {
        this.name = "";
        this.city = "";
        this.category = "";
    };

    $scope.event = new Event();

    $scope.validateEvent = function () {
        var event = $scope.event;

        if (event.name !== "" && event.city !== "" && event.category !== "") {
            return true;
        }
        else {
            return false;
        }
    };

    $scope.addEvent = function () {
        var valid = $scope.validateEvent();

        if (valid) {
            $http
                .post(host + "/city/exist", { city: $scope.event.city })
                .then(function (res) {
                    var msgRet = res.data;

                    if (msgRet == "city not exist") {
                        $http
                            .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.event.city)
                            .then(function (res) {
                                var newCityData = {
                                    name: $scope.event.city,
                                    lat: res.data.results[0].geometry.location.lat,
                                    lng: res.data.results[0].geometry.location.lng
                                }

                                $http
                                    .post(host + "/city/add", newCityData)
                                    .then(function (res) {
                                        var bp = 1;
                                        bp = 2;
                                    });
                            });
                    }

                    $http
                        .post(host + "/event/add", $scope.event)
                        .then(function (res) {
                            // var bp = 1;
                            // bp = 2;
                            // console.log("chegou" + res.data);
                        });
                });
        }
    };    
    
    $scope.listEvents = function () {
        $http
            .get(host + "/event/list_all")
            .then(function (res) {
                $scope.events = res.data;
            });
    };
});