'use strict';

angular.module('72TownsendApp')
  .controller('ListCtrl', function($rootScope, $scope) {

  	//init setting for 'sort by'
  	$scope.sort = "floor";
  	$scope.listHidden = false;

  	$scope.showUnit = function showUnit(filteredItems, index){  		
  		$scope.unitIndex = index;
  		$scope.filteredList = filteredItems;
  		$scope.unit = filteredItems[index];

  		$scope.listHidden = true;
  	}

  	$scope.showNext = function showNext(filteredList, unitIndex){
  		$scope.unit = filteredList[unitIndex + 1];
  		$scope.unitIndex = unitIndex + 1;
  	}

  	$scope.showPrevious = function showPrevious(filteredList, unitIndex){
  		$scope.unit = filteredList[unitIndex -1];
  		$scope.unitIndex = unitIndex - 1;
  	}


  	$scope.test = [
  	
  	{  id: "1", 
  	   unit: "511", 
  	   plan: "L",
  	   bathrooms: "2", 
  	   bedrooms: "2", 
  	   squarefoot: "1,106", 
  	   floor: "5", 
  	   image: "../../images/planl.png"
  	},

  	{  id: "2", 
  	   unit: "412",
  	   plan: "B", 
  	   bathrooms: "1", 
  	   bedrooms: "1", 
  	   squarefoot: "906", 
  	   floor: "4", 
  	   image: "../../images/planb.png"
  	},

  	{  id: "3", 
  	   unit: "312",
  	   plan: "D", 
  	   bathrooms: "1", 
  	   bedrooms: "1", 
  	   squarefoot: "2,006", 
  	   floor: "4", 
  	   image: "../../images/pland.png"
  	},

  	{  id: "4", 
  	   unit: "912",
  	   plan: "D", 
  	   bathrooms: "2", 
  	   bedrooms: "3", 
  	   squarefoot: "2,006", 
  	   floor: "9", 
  	   image: "../../images/pland.png"
  	}];

 
  });
