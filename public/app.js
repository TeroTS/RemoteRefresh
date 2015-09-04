var app = angular.module('pageRefresh', ['ngRoute', 'ngWebsocket']);

app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeCtrl',
        })
        .when('/remote', {
            templateUrl: 'remote.html',
            controller: 'remoteCtrl',
        })
        .otherwise({
        	redirectTo: '/home'
        });
});