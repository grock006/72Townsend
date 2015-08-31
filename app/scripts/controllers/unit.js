'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:MainCtrl
 * @description
 * # UnitCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('UnitCtrl', function($scope, $state, $rootScope) {

    $scope.showNext = function showNext(filteredListItems, unitListIndex){
        $rootScope.unitNumber = $rootScope.filteredListItems[unitListIndex + 1];
        $rootScope.unitListIndex = unitListIndex + 1;
    };


    $scope.showPrevious = function showPrevious(filteredListItems, unitListIndex){
        $rootScope.unitNumber = $rootScope.filteredListItems[unitListIndex - 1];
        $rootScope.unitListIndex = unitListIndex - 1;
    };
   
});
