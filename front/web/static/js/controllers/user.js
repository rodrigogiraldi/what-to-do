app.controller("UserCtrl", function ($scope, $http, $cookies) {
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.checkLogin = () => {
        $http
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

    }

    $scope.isLogged = () => {
        if ($cookies.get("email") != undefined) {
            window.location.replace("/static/pages/index.html");
        };
    }

    $scope.logout = () => {
        $cookies.remove("email");
        window.location.replace("/static/pages/login.html");
    }
});