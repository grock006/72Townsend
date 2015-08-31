'use strict';

angular.module('72TownsendApp')
  .controller('ListCtrl', function($rootScope, $scope, $filter, $modal, $state, $http) {

     $http.get("72Townsend.json")
        .success( function(data){
            $scope.test = data;
        });

  	//init setting for 'sort by'
  	$scope.sort = "floor";
    $scope.sortText = "floor";

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

    $scope.slides = [ {image: "images/balcony/903Balcony1.png"},
                    {image: "images/balcony/903Balcony2.png"},
                    {image: "images/balcony/903Balcony3.png"}];    


  $scope.openBalcony = function openBalcony(unit) {

    $modal.open({
      animation: true,
      templateUrl: 'views/balcony-modal.html',
      controller: 'ListCtrl',
      size: 'sm'
    });

    $scope.slides = unit.balconyImages;

  };


  $scope.newUnit = function newUnit(unit, filteredItems, index){
    $rootScope.unitNumber = unit;
    $rootScope.filteredListItems = filteredItems;
    $rootScope.unitListIndex = index;
    $rootScope.listShow = true;
    $state.go('unit')
  }
     

});
