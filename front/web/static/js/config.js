app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../pages/home.html'
        })

        .state('event_add', {
            url: '/event_add',
            templateUrl: '../pages/event_add.html',
            controller: 'EventCtrl'
            /*,
            controller: function($scope){
                $rootScope.title = "Events"
            }*/
        })

        .state('event_find', {
            url: '/event_find',
            templateUrl: '../pages/event_find.html',
            controller: 'EventCtrl'
        })

        .state('map', {
            url: '/map',
            templateUrl: '../pages/map.html'
        });
});