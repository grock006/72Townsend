'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # UnitCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('ModalCtrl', function($scope, $rootScope, $modal, images) {

  $scope.slides = images;

  // $scope.slides = [ {image: "../../images/balcony/903Balcony1.png"},
  //                   {image: "../../images/balcony/903Balcony2.png"},
  //                   {image: "../../images/balcony/903Balcony3.png"}];    

   
});