'use strict';

/**
 * @ngdoc service
 * @name dreaPortfolioApp.project
 * @description
 * # project
 * Factory in the dreaPortfolioApp.
 */
angular.module('dreaPortfolioApp')
  .factory('ProjectService', function () {

    return {

      funProjects: [

      ],

      normalProjects: [
        {
          title: "Virtual Reality",
          backgroundImage: "",
          description: "ADD TEXT HERE PLS",
          path: "/project1",
          color: "#B6B6FF",
        },
        {
          title: "Project 2",
          backgroundImage: "",
          description: "ADD TEXT HERE PLS",
          path: "/project2",
          color: "#CBFFB1"
        },
        {
          title: "Project 3",
          backgroundImage: "",
          description: "ADD TEXT HERE PLS",
          path: "/project3",
          color: "#FFB1CE"
        },
        {
          title: "Project 4",
          backgroundImage: "",
          description: "ADD TEXT HERE PLS",
          path: "/project4",
          color: "#FFFDB1"
        }
      ]

    };
  });
