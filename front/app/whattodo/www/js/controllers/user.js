app.controller("UserCtrl", function ($scope, $http, $cookies) {
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.checkPassword = {
        value: ""
    };

    $scope.checkLogin = function () {
        if ($scope.user.email != "" && $scope.user.password != "") {
            $scope.user.email = $scope.user.email.toLowerCase();
            $http
                .post(host + "/user/checklogin", $scope.user)
                .then(function (res) {
                    if (res.data == "login ok") {
                        $cookies.put("email", $scope.user.email);
                        window.location.replace("home.html");
                    }
                    else {
                        console.log(res.data);
                    }
                });
        }
    }

    $scope.userAdd = function () {
        var bp = 1;
        if ($scope.user.email != "" && $scope.user.password != "" && ($scope.user.password == $scope.checkPassword.value)) {
            $scope.user.email = $scope.user.email.toLowerCase();
            $http
                .post(host + "/user/add", $scope.user)
                .then(function (res) {
                    console.log(res.data);
                    window.location.replace("/");
                });
        }
    };

    $scope.isLogged = function () {
        if ($cookies.get("email") !== undefined) {
            window.location.replace("home.html");
        }
    };
    
    $scope.logout = function(){
        $cookies.remove("email");
        window.location.replace("index.html");
    }

    // $scope.on();    
});