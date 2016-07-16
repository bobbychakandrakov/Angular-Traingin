(function() {
    'use strict';
    angular.module('ngTraining',['ngRoute','ui.sortable'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
        });
        $routeProvider.when('/home',{
            template:'<my-slider></my-slider>'
        })
        .when('/list',{
            template:'<list-item></list-item>'
        })
        .when('/account',{
            templateUrl:'views/account.html',
            controller:'AccountController'
        })
        .otherwise({redirectTo:'/home'});
    });
}());
