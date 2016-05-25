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
        {
          title: '',
          backgroundImage: '',
          description: 'Rube Goldberg Machine: Brandcenter Style',
          path: '/fun1',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/fun/rube-cover.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: 'PRIZM: Nightmare music',
          backgroundImage: '',
          description: 'Analog | Physical Build | UX-ish',
          path: '/fun2',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/fun/prism2.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: 'WINDOW',
          backgroundImage: '',
          description: 'UX | UI | Design',
          path: '/fun3',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/window/window-cover2.jpg)',
            'background-size': 'cover'
          },
        },
        {
          title: 'MOOCH',
          backgroundImage: '',
          description: 'COMING SOON!! :)',
          path: '/fun4',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/fun/m-cover.png)',
            'background-size': 'cover'
          },
        },
        {
          title: 'Pepsi',
          backgroundImage: '',
          description: 'Animation | AE',
          path: '/fun5',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/fun/pepsi.gif)',
            'background-size': 'cover'
          },
        }
      ],

      normalProjects: [
        {
          title: '',
          backgroundImage: '',
          description: 'Virtual Reality Experience',
          path: '/project1',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/vr/katie-cover.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: '',
          backgroundImage: '',
          description: 'Game App | UX | Design | Prototyping',
          path: '/project2',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/bh/bh-cover.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: '',
          backgroundImage: '',
          description: 'Strategy | UX | UI',
          path: '/project3',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/era/era-cover.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: 'Coming Soon',
          backgroundImage: '',
          description: 'Arduino | 3D-Modeling | Physical Prototyping',
          path: '/project4',
          styles: {
            'background-color': '#B6B6FF',
            'background-image': 'url(images/dash/dash2.gif)',
            'background-size': 'cover'
          },
        },
        {
          title: '+ More Work',
          backgroundImage: '',
          description: 'Collection of Videos, Passion Projects & More!',
          path: '/project5',
          styles: {
            'background-color': '#FFF59D',
            'background-image': 'url(images/more.gif)',
            'background-size': 'cover'
          },
        }
      ]

    };
  });
