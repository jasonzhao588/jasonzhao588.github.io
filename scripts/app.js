'use strict';

var mainApp = angular.module('ryApp', [
    'ui.router',
    'ngAnimate',
    'ryAppCtrls',
    'jq_plug'
]);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'views/home.html'
        })
        .state('pmall', {
            url: '/pmall',
            templateUrl: 'views/pmall.html'
        })
        .state('case', {
            url: '/case',
            templateUrl: 'views/case.html'
        })
        
});








