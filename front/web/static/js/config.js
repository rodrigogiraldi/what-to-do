app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                "content": {
                    templateUrl: '../pages/home.html'
                },
                "login": {

                    templateUrl: "../pages/signin.html",
                    controller: "UserCtrl"
                }
            }
        })

        .state('signup', {
            url: '/signup',
            views: {
                "login": {
                    templateUrl: "../pages/signup.html",
                    controller: "UserCtrl"
                }
            }
        })

        .state('event_add', {
            url: '/event_add',
            views: {
                "content": {
                    templateUrl: '../pages/event_add.html',
                    controller: 'EventCtrl'
                }
            }
            /*,
            controller: function($scope){
                $rootScope.title = "Events"
            }*/
        })

        .state('event_find', {
            url: '/event_find',
            views: {
                "content": {
                    templateUrl: '../pages/event_find.html',
                    controller: 'EventCtrl'
                }
            }
        })

        .state('map', {
            url: '/map',
            views: {
                "content": {
                    templateUrl: '../pages/map.html',
                    controller: 'MapCtrl'
                }
            }
        });
});