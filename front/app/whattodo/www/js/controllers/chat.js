app.controller("ChatCtrl", function ($scope, $interval, $http, $cookies) {
    $scope.listAll = function () {
        $http
            .get(host + "/chat/listall")
            .then(function (res) {
                $scope.messages = res.data;

                for (var i = 0; i < $scope.messages.length; i++) {
                    $scope.messages[i].owner = $scope.messages[i].user === $cookies.get("email") ? true : false;
                }
            });
    };
});