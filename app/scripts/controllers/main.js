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

    $scope.testFunction = function testFunction(){
      console.log("hey")
    }
    

    $scope.selectBedrooms = function selectBedrooms(num){
        var number = num.toString();
        $rootScope.bedrooms = number;

        $state.go('list');
    };
  
    $scope.slides = [ 
                {image: "images/views/mobile_east.png", text: "East Elevation"},
    				  {image: "images/views/mobile_north.png", text: "North Elevation"},
    				  {image: "images/views/mobile_west.png", text: "West Elevation"},
    				  {image: "images/views/mobile_south.png", text: "South Elevation"}];          


    $scope.openLandingModal = function openLandingModal() {

    $modal.open({
      animation: true,
      templateUrl: 'views/balcony-modal.html',
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
