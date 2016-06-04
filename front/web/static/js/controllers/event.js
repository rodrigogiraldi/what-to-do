app.controller("EventCtrl", function ($scope, $http) {
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
                .post("/event/add", $scope.event)
                .then(function (res) {
                    // console.log("chegou" + res.data);
                });
            // console.log("ok");
        }
        else {
            // console.log("not ok");
        }
    };

    $scope.listEvents = function () {
        $http
            .get("/event/list_all")
            .then(function(res){
                $scope.events = res.data;
            });
    };
});