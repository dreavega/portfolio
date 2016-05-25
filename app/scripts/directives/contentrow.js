'use strict';

/**
 * @ngdoc directive
 * @name dreaPortfolioApp.directive:contentRow
 * @description
 * # contentRow
 */
angular.module('dreaPortfolioApp')
  .directive('contentRow', function ($location) {
    return {
      templateUrl: 'views/content-row.html',
      restrict: 'E',
      replace: false,
      scope: {
        project: '='
      },
      controller: function($scope) {
        $scope.goToRoute = function(route) {
          $location.path(route);
        };
      }
    };
  });
