'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # UnitCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('UnitCtrl', function($scope, $state, $rootScope, $modal) {

    $scope.showNext = function showNext(filteredListItems, unitListIndex){
      if (filteredListItems.length !== unitListIndex + 1){
        $rootScope.unitNumber = $rootScope.filteredListItems[unitListIndex + 1];
        $rootScope.unitListIndex = unitListIndex + 1;
      }
    };


    $scope.showPrevious = function showPrevious(filteredListItems, unitListIndex){
      if(unitListIndex !== 0){
        $rootScope.unitNumber = $rootScope.filteredListItems[unitListIndex - 1];
        $rootScope.unitListIndex = unitListIndex - 1;
      }
    }; 


  $scope.openBalcony = function openBalcony(unitNumber) {

    $modal.open({
      animation: true,
      templateUrl: 'views/balcony-modal.html',
      controller: 'ModalCtrl',
      size: 'lg',
      resolve: {
        images: function () {
          return unitNumber.balconyImages;
        }
      }
    });

  };
   
});
