'use strict';

/**
 * @ngdoc function
 * @name dreaPortfolioApp.controller:AboutCtrl
 * @description
 * # FunCtrl
 * Controller of the dreaPortfolioApp
 */
angular.module('dreaPortfolioApp')
  .controller('FunCtrl', function ($scope, ProjectService) {
    window.service = ProjectService;
    $scope.projects = ProjectService.funProjects;

  });
