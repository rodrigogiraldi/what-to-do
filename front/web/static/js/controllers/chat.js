app.controller("ChatCtrl", function($scope, $interval){
   $scope.value = 1; 
   
   $interval(function(){
       $scope.value++;
   }, 10000);
});