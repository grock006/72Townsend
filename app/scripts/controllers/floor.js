'use strict';

angular.module('72TownsendApp')
  .controller('FloorCtrl', function($rootScope, $scope, $filter, $modal, $state, $http) {

     $scope.showFloor = false;

     $http.get("72Townsend.json")
        .success( function(data){
            $scope.test = data;
        
        $scope.checkUnitSold = function checkUnitSold(num){         
            
            var unitCheck = $filter('filter')($scope.test, {unit:num});
            var unitSold = unitCheck[0].sold;
           
            return unitSold;
          }

           $scope.showFloor = true; 
        
        });

    $scope.displayUnit = function displayUnit(num){
         var unitNumber = $filter('filter')($scope.test, {unit:num});

         $rootScope.unitNumber = unitNumber[0];
         var floorNumber = num.toString().charAt(0);

         if(floorNumber === "3"){
             $rootScope.floorNumber = "floorthree";
          }
          if(floorNumber === "4"){
             $rootScope.floorNumber = "floorfour";
          }
          if(floorNumber === "5"){
             $rootScope.floorNumber = "floorfive";
          }
          if(floorNumber === "6"){
             $rootScope.floorNumber = "floorsix";
          }
          if(floorNumber === "7"){
             $rootScope.floorNumber = "floorseven";
          }
          if(floorNumber === "8"){
             $rootScope.floorNumber = "flooreight";
          }
          if(floorNumber === "9"){
             $rootScope.floorNumber = "floornine";
          }

         $rootScope.filteredListItems = $filter('filter')($scope.test, {floor:floorNumber, sold:false});
             var secondNumber = num.toString().charAt(1);
             var thirdNumber  = num.toString().charAt(2);
             
             if(secondNumber === "0"){
                $rootScope.unitListIndex = parseInt(thirdNumber) - 1;
             }
             else{
                $rootScope.unitListIndex = parseInt(secondNumber + thirdNumber) - 1;
             }
             
             $rootScope.listShow = false;    
             $state.go('unit');
    }


});
