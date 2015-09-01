'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('MainCtrl', function($scope, $state, $rootScope, $modal) {
    

    $scope.selectBedrooms = function selectBedrooms(num){
        var number = num.toString();
        $rootScope.bedrooms = number;

        $state.go('list');
    };
  
    $scope.slides = [ {image: "images/mobile_landing_one.png"},
    				  {image: "images/mobile_north.png"},
    				  {image: "images/mobile_west.png"},
    				  {image: "images/mobile_south.png"}];          


    $scope.openLandingModal = function openLandingModal() {

    $modal.open({
      animation: true,
      templateUrl: '../../views/balcony-modal.html',
      controller: 'ModalCtrl',
      size: 'lg',
      resolve: {
        images: function () {
          return $scope.slides;
        }
      }
    });

  };                  

});
