'use strict';

/**
 * @ngdoc function
 * @name 72TownsendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 72TownsendApp
 */
angular.module('72TownsendApp')
  .controller('ListCtrl', function($scope) {

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
  	}



  	];

  
    
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  

  });
