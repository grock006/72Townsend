'use strict';

angular.module('72TownsendApp')
  .controller('ListCtrl', function($rootScope, $scope, $filter, $modal, $state, $http) {

     $http.get("72Townsend.json")
        .success( function(data){
            $scope.test = data;
        });

  	//init setting for 'sort by'
  	$scope.sort = "floor";
    $scope.sortText = "sort by";

    if($rootScope.bedrooms == 3){
        $scope.bedroomText = "3"
        console.log($scope.bedroomText)
    }
    if($rootScope.bedrooms == 2){
        $scope.bedroomText = "2"
    }
    if($rootScope.bedrooms == 1){
        $scope.bedroomText = "1"
    }

     $scope.selectListBedroom = function selectListBedroom(num){
        if(num !== ''){
            var number = num.toString();
            $rootScope.bedrooms = number;
            $scope.bedroomText = number;
        }
        if(num === ''){
            $rootScope.bedrooms = '';
            $scope.bedroomText = 'ALL';
        }

    };

    $scope.selectSort = function selectSort(str){
        $scope.sort = str;

        if(str === 'floor'){
            $scope.sortText = 'Floor: Low To High';
        }
        if(str === '-floor'){
            $scope.sortText = 'Floor: High To Low';
        }
         if(str === 'bedrooms'){
            $scope.sortText = 'Bedrooms: Low To High';
        }
        if(str === '-bedrooms'){
            $scope.sortText = 'Bedrooms: High To Low';
        }
         if(str === 'baths'){
            $scope.sortText = 'Baths: Low To High';
        }
        if(str === '-baths'){
            $scope.sortText = 'Baths: High To Low';
        }
        if(str === 'interiorSqFt'){
            $scope.sortText = 'Square Footage: Low To High';
        }
        if(str === '-interiorSqFt'){
            $scope.sortText = 'Square Footage: High To Low';
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
