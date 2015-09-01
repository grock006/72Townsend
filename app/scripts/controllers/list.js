'use strict';

angular.module('72TownsendApp')
  .controller('ListCtrl', function($rootScope, $scope, $filter, $modal, $state, $http) {

     $http.get("72Townsend.json")
        .success( function(data){
            $scope.test = data;
        });

  	//init setting for 'sort by'
  	$scope.sort = "floor";
    $scope.sortText = "";

     $scope.selectListBedroom = function selectListBedroom(num){
        if(Number.isInteger(num)){
            var number = num.toString();
            $rootScope.bedrooms = number;
            $scope.bedroomText = '';
        }
        else{
            $rootScope.bedrooms = '';
            $scope.bedroomText = 'ALL';
        }

    };

    $scope.selectSort = function selectSort(str){
        if(str === 'interiorSqFt'){
            $scope.sort = 'interiorSqFt';
            $scope.sortText = 'Square Footage';
        }
        else{
            $scope.sort = str;
            $scope.sortText = str;
        }
    };


  $scope.newUnit = function newUnit(unit, filteredItems, index){
    $rootScope.unitNumber = unit;
    $rootScope.filteredListItems = filteredItems;
    $rootScope.unitListIndex = index;
    
    $rootScope.listShow = true;
    
    $rootScope.floorNumber = "floorthree";

    $state.go('unit')
  }
     

});
