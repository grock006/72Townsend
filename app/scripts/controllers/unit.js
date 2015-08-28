'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('UnitCtrl', function($scope, $state, $rootScope) {

    console.log($rootScope.unitNumber)
    console.log($rootScope.filteredListItems)
    console.log($rootScope.unitListIndex)

    $scope.showNext = function showNext(filteredListItems, unitListIndex){
        $rootScope.unitNumber = $rootScope.filteredListItems[unitListIndex + 1];
        $rootScope.unitListIndex = unitListIndex + 1;
    };

    $scope.showPrevious = function showPrevious(filteredList, unitIndex){
        $scope.unit = filteredList[unitIndex -1];
        $scope.unitIndex = unitIndex - 1;
    };
   
});
