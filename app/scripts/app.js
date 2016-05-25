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
      .when('/resume', {
        templateUrl: 'views/resume.html',
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
      .when('/project5', {
        templateUrl: 'views/fun.html',
        controller: 'FunCtrl',
        controllerAs: 'vm'
      })
      .when('/fun1', {
        templateUrl: 'views/fun1.html',
      })
      .when('/fun2', {
        templateUrl: 'views/fun2.html',
      })
      .when('/fun3', {
        templateUrl: 'views/fun3.html',
      })
      .when('/fun4', {
        templateUrl: 'views/fun4.html',
      })
      .when('/fun5', {
        templateUrl: 'views/fun5.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
