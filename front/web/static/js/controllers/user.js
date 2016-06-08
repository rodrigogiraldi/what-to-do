app.controller("UserCtrl", function ($scope, $http, $cookies) {
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.checkLogin = function () {
        $http
            // .post("/use", $scope.user)
            .post("/user/checklogin", $scope.user)
            .then(function (res) {
                var data = res.data;
                var email = $scope.user.email;
                console.log($cookies.get("email"));
                if (data == "login ok") {
                    $cookies.put("email", email);
                    window.location.replace("/static/pages/index.html");
                }
            });

    };

    $scope.userAdd = function () {
        if ($scope.user.email != "" && $scope.user.password != "" && ($scope.user.password == $scope.checkPassword)) {
            $http
                .post("/user/add", $scope.user)
                .then(function (res) {
                    console.log(res.data);
                    window.location.replace("/");
                });
        }
    };

    $scope.isLogged = function () {
        if ($cookies.get("email") !== undefined) {
            window.location.replace("/static/pages/index.html");
        }
    };

    $scope.logout = function () {
        $cookies.remove("email");
        window.location.replace("/static/pages/login.html");
    };
});