app.controller('UserCtrl', function ($scope, $http) {
  $scope.user = {
    email: "",
    password: ""
  }
  
  $scope.resp = "";

  $scope.checkLogin = function () {
    var user = $scope.user;

    if (user.email != "" && user.password != "") {
      $http
        .post(host + "/user/checklogin", user)
        .then(function(res){
          $scope.resp = res.data;
        });
    }
  };
});