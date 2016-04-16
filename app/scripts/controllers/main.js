'use strict';

/**
 * @ngdoc function
 * @name dreaPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dreaPortfolioApp
 */
angular.module('dreaPortfolioApp')
  .controller('MainCtrl', function ($scope, ProjectService) {
    $scope.projects = ProjectService.normalProjects;
  });
