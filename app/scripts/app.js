'use strict';

/**
 * @ngdoc overview
 * @name dreaPortfolioApp
 * @description
 * # dreaPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('dreaPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/fun', {
        templateUrl: 'views/fun.html',
        controller: 'FunCtrl',
        controllerAs: 'vm'
      })
      .when('/project1', {
        templateUrl: 'views/project1.html',
      })
      .when('/project2', {
        templateUrl: 'views/project2.html',
      })
      .when('/project3', {
        templateUrl: 'views/project3.html',
      })
      .when('/project4', {
        templateUrl: 'views/project4.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
