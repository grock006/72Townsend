'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # UnitCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('ModalCtrl', function($scope, $rootScope, $modal, $modalInstance, images) {

  $scope.slides = images;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
   
});