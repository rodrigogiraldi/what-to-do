app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signin', {
            url: '/index',
            templateUrl: 'pages/signin.html',
            controller: 'UserCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'pages/signup.html',
            controller: 'UserCtrl'
        })        

    $urlRouterProvider.otherwise("/index");
});


