'use strict';

/**
 * @ngdoc overview
 * @name 72TownsendApp
 * @description
 * # 72TownsendApp
 *
 * Main module of the application.
 */
angular
  .module('72TownsendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .state('unit', {
        url: '/unit',
        templateUrl: 'views/unit.html',
        controller: 'UnitCtrl',
        controllerAs: 'unit'
      })
       .state('floorthree', {
        url: '/floor/3',
        templateUrl: 'views/floor-three.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
       .state('floorfour', {
        url: '/floor/4',
        templateUrl: 'views/floor-four.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
      .state('floorfive', {
        url: '/floor/5',
        templateUrl: 'views/floor-five.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
       .state('floorsix', {
        url: '/floor/6',
        templateUrl: 'views/floor-six.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
        .state('floorseven', {
        url: '/floor/7',
        templateUrl: 'views/floor-seven.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
        .state('flooreight', {
        url: '/floor/8',
        templateUrl: 'views/floor-eight.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      })
      .state('floornine', {
        url: '/floor/9',
        templateUrl: 'views/floor-nine.html',
        controller: 'FloorCtrl',
        controllerAs: 'floor'
      });
     
    $urlRouterProvider.otherwise('/');

  }]);
