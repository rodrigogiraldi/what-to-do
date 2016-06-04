app.controller("ChatCtrl", function($scope, $interval, $http, $cookies){
    $scope.sendMessage = function(){
        if ($scope.message !== undefined && $scope.message !== ""){
            $http
                .post("/chat/sendmessage", {user: $cookies.get("email"), message: $scope.message})
                .then(function(res){
                    $scope.message = "";
                    $scope.listAll();
                    // console.log(res.data);
                });
        }
    };
    
    $scope.listAll = function(){
        $http
            .get("/chat/listall")
            .then(function(res){
                $scope.messages = res.data;
                
                for(var i = 0; i < $scope.messages.length; i++){
                    $scope.messages[i].owner = $scope.messages[i].user === $cookies.get("email") ? true : false;
                }
            });
    };
    
    $interval(function(){
        $scope.listAll();
    }, 10000);
    
//    $scope.value = 1; 
   
//    $interval(function(){
//        $scope.value++;
//    }, 10000);
});