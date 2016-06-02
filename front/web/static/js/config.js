app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../pages/home.html'
        })
        
        .state('things_add', {
            url: '/things_add',
            templateUrl: '../pages/things_add.html'
        })
                
        .state('things_find', {
            url: '/things_find',
            templateUrl: '../pages/things_find.html'
        })
                
        .state('map', {
            url: '/map',
            templateUrl: '../pages/map.html'
        });
});