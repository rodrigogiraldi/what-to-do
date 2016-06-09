app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                "login": {
                    title: 'Login',
                    templateUrl: 'signin.html',
                    controller: 'UserCtrl'
                },
                "content": {
                    // title: 'Home',
                    templateUrl: 'menu.html'
                }
            }
        })
        .state('signup', {
            url: '/signup',
            views: {
                "login": {
                    templateUrl: 'signup.html',
                    controller: 'UserCtrl'
                }
            }
        })
        .state('menu', {
            url: '/menu',
            views: {
                "content": {
                    templateUrl: 'menu.html'
                }
            }
        })
        .state('event_find', {
            url: '/event_find',
            views: {
                "content": {
                    templateUrl: 'event_find.html'
                }
            }
        })
        .state('event_add', {
            url: '/event_add',
            views: {
                "content": {
                    templateUrl: 'event_add.html'
                }
            }
        })
        .state('map', {
            url: '/map',
            views: {
                "content": {
                    templateUrl: 'map.html'
                }
            }
        })
        .state('chat', {
            url: '/chat',
            views: {
                "content": {
                    templateUrl: 'chat.html'
                }
            }
        })                                ;

    $urlRouterProvider.otherwise("/index");
});


