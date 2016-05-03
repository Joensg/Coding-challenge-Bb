'use strict';

angular
    .module('bookingbugApp', ['ui.router', 'ui.bootstrap', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        // app routes
        $stateProvider
            .state('app', { // route for the home page
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'BservicesController'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'BservicesController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'BservicesController'
                    }
                }
            });

        // default route
        $urlRouterProvider.otherwise('/');
    });
