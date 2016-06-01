app.controller("UserCtrl", function ($scope, $http) {
    $scope.checkLogin = () => {
        $http
            .post("/user/checklogin", $scope.user)
            .then(function (req, res) {
                var bp = 1;
            });

    }
});