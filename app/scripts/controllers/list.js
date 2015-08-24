'use strict';

angular.module('72TownsendApp')
  .controller('ListCtrl', function($rootScope, $scope, $filter) {

  	//init setting for 'sort by'
  	$scope.sort = "floor";
  	$scope.listHidden = false;
  	$scope.floorHidden = false;

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


  	// $scope.test = [
  	
  	// {  id: "1", 
  	//    unit: "511", 
  	//    plan: "L",
  	//    bathrooms: "2", 
  	//    bedrooms: "2", 
  	//    squarefoot: "1,106", 
  	//    floor: "5", 
  	//    image: "../../images/planL.png"
  	// },

  	// {  id: "2", 
  	//    unit: "412",
  	//    plan: "B", 
  	//    bathrooms: "1", 
  	//    bedrooms: "1", 
  	//    squarefoot: "906", 
  	//    floor: "4", 
  	//    image: "../../images/planB.png"
  	// },

  	// {  id: "3", 
  	//    unit: "312",
  	//    plan: "D", 
  	//    bathrooms: "1", 
  	//    bedrooms: "1", 
  	//    squarefoot: "2,006", 
  	//    floor: "4", 
  	//    image: "../../images/planD.png"
  	// },

  	// {  id: "4", 
  	//    unit: "912",
  	//    plan: "D", 
  	//    bathrooms: "2", 
  	//    bedrooms: "3", 
  	//    squarefoot: "2,006", 
  	//    floor: "9", 
  	//    image: "../../images/planD.png"
  	// }];


  $scope.test = 
  [{
    "plan": "A3",
    "planId": "A",
    "release": 1,
    "unit": 301,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "A3 - TERRACE/PAVER PATIO",
    "exteriorSqFt": 142,
    "address": "72 Townsend Unit #301",
    "floor": 3,
    "story": 1,
    "width": 22,
    "interiorSqFt": 766,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B3",
    "planId": "B",
    "release": 1,
    "unit": 302,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "B3 - TERRACE/PAVER PATIO",
    "exteriorSqFt": 257,
    "address": "72 Townsend Unit #302",
    "floor": 3,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1198,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C3",
    "planId": "C",
    "release": 1,
    "unit": 303,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "C3 BMR - TERRACE/PAVER PATIO",
    "exteriorSqFt": 236,
    "address": "72 Townsend Unit #303",
    "floor": 3,
    "story": 1,
    "width": 22,
    "interiorSqFt": 772,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D3",
    "planId": "D",
    "release": 1,
    "unit": 304,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "D3 - TERRACE  /PAVER PATIO",
    "exteriorSqFt": 508,
    "address": "72 Townsend Unit #304",
    "floor": 3,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1186,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E3",
    "planId": "E",
    "release": 1,
    "unit": 305,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "E3 - TERRACE/PAVER PATIO",
    "exteriorSqFt": 339,
    "address": "72 Townsend Unit #305",
    "floor": 3,
    "story": 1,
    "width": 23,
    "interiorSqFt": 619,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "F",
    "planId": "F",
    "release": 1,
    "unit": 306,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "F - TERRACE/PAVER PATIO",
    "exteriorSqFt": 619,
    "address": "72 Townsend Unit #306",
    "floor": 3,
    "story": 1,
    "width": 41,
    "interiorSqFt": 935,
    "bedrooms": 2,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planF.png"
  },
  {
    "plan": "G",
    "planId": "G",
    "release": 1,
    "unit": 307,
    "tract": "4779-3",
    "elevation": "A",
    "elevationDescription": "G",
    "exteriorSqFt": 0,
    "address": "72 Townsend Unit #307",
    "floor": 3,
    "story": 1,
    "width": 25,
    "interiorSqFt": 709,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planG.png"
  },
  {
    "plan": "H",
    "planId": "H",
    "release": 1,
    "unit": 308,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "H - TERRACE/PAVER PATIO",
    "exteriorSqFt": 501,
    "address": "72 Townsend Unit #308",
    "floor": 3,
    "story": 1,
    "width": 35,
    "interiorSqFt": 950,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planH.png"
  },
  {
    "plan": "J3-7",
    "planId": "J",
    "release": 1,
    "unit": 309,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "J3-7 - TERRACE/PAVER PATIO",
    "exteriorSqFt": 695,
    "address": "72 Townsend Unit #309",
    "floor": 3,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1136,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 1,
    "unit": 310,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "K3-8 - TERRACE  /PAVER PATIO",
    "exteriorSqFt": 764,
    "address": "72 Townsend Unit #310",
    "floor": 3,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L3-7",
    "planId": "L",
    "release": 1,
    "unit": 311,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "L3-7 - TERRACE  /PAVER PATIO",
    "exteriorSqFt": 871,
    "address": "72 Townsend Unit #311",
    "floor": 3,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1106,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 1,
    "unit": 312,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "Q - TERRACE  /PAVER PATIO",
    "exteriorSqFt": 531,
    "address": "72 Townsend Unit #312",
    "floor": 3,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "A4-8",
    "planId": "A",
    "release": 2,
    "unit": 401,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "A4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #401",
    "floor": 4,
    "story": 1,
    "width": 22,
    "interiorSqFt": 788,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B458",
    "planId": "B",
    "release": 2,
    "unit": 402,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "B458 - BALCONY",
    "exteriorSqFt": 52,
    "address": "72 Townsend Unit #402",
    "floor": 4,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1289,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C4-8",
    "planId": "C",
    "release": 2,
    "unit": 403,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "C4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #403",
    "floor": 4,
    "story": 1,
    "width": 22,
    "interiorSqFt": 785,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D458",
    "planId": "D",
    "release": 2,
    "unit": 404,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "D458 - BALCONY",
    "exteriorSqFt": 60,
    "address": "72 Townsend Unit #404",
    "floor": 4,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1260,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E4-7",
    "planId": "E",
    "release": 2,
    "unit": 405,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "E4-7 - BALCONY",
    "exteriorSqFt": 57.3,
    "address": "72 Townsend Unit #405",
    "floor": 4,
    "story": 1,
    "width": 23,
    "interiorSqFt": 632,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "J3-7",
    "planId": "J",
    "release": 2,
    "unit": 409,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "J3-7 - BALCONY",
    "exteriorSqFt": 49.8,
    "address": "72 Townsend Unit #409",
    "floor": 4,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1136,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 2,
    "unit": 410,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "K3-8 BMR - BALCONY",
    "exteriorSqFt": 50.9,
    "address": "72 Townsend Unit #410",
    "floor": 4,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L3-7",
    "planId": "L",
    "release": 2,
    "unit": 411,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "L3-7 - BALCONY",
    "exteriorSqFt": 54.6,
    "address": "72 Townsend Unit #411",
    "floor": 4,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1106,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL.png"
  },
  {
    "plan": "N",
    "planId": "N",
    "release": 2,
    "unit": 408,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "N - BALCONY",
    "exteriorSqFt": 53.9,
    "address": "72 Townsend Unit #408",
    "floor": 4,
    "story": 1,
    "width": 42,
    "interiorSqFt": 1005,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planN.png"
  },
  {
    "plan": "O",
    "planId": "O",
    "release": 2,
    "unit": 407,
    "tract": "4779-3",
    "elevation": "A",
    "elevationDescription": "O",
    "exteriorSqFt": 0,
    "address": "72 Townsend Unit #407",
    "floor": 4,
    "story": 1,
    "width": 27,
    "interiorSqFt": 851,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planO.png"
  },
  {
    "plan": "P45",
    "planId": "P",
    "release": 2,
    "unit": 406,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "P45 - BALCONY",
    "exteriorSqFt": 64,
    "address": "72 Townsend Unit #406",
    "floor": 4,
    "story": 1,
    "width": 41,
    "interiorSqFt": 1176,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planP.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 2,
    "unit": 412,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "Q - BALCONY",
    "exteriorSqFt": 66.6,
    "address": "72 Townsend Unit #412",
    "floor": 4,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "A4-8",
    "planId": "A",
    "release": 3,
    "unit": 501,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "A4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #501",
    "floor": 5,
    "story": 1,
    "width": 22,
    "interiorSqFt": 788,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B458",
    "planId": "B",
    "release": 3,
    "unit": 502,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "B458 - BALCONY",
    "exteriorSqFt": 52,
    "address": "72 Townsend Unit #502",
    "floor": 5,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1289,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C4-8",
    "planId": "C",
    "release": 3,
    "unit": 503,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "C4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #503",
    "floor": 5,
    "story": 1,
    "width": 22,
    "interiorSqFt": 785,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D458",
    "planId": "D",
    "release": 3,
    "unit": 504,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "D458 - BALCONY",
    "exteriorSqFt": 60,
    "address": "72 Townsend Unit #504",
    "floor": 5,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1260,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E4-7",
    "planId": "E",
    "release": 3,
    "unit": 505,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "E4-7 - BALCONY",
    "exteriorSqFt": 57.3,
    "address": "72 Townsend Unit #505",
    "floor": 5,
    "story": 1,
    "width": 23,
    "interiorSqFt": 632,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "J3-7",
    "planId": "J",
    "release": 3,
    "unit": 509,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "J3-7 - BALCONY",
    "exteriorSqFt": 49.8,
    "address": "72 Townsend Unit #509",
    "floor": 5,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1136,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 3,
    "unit": 510,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "K3-8 - BALCONY",
    "exteriorSqFt": 50.9,
    "address": "72 Townsend Unit #510",
    "floor": 5,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L3-7",
    "planId": "L",
    "release": 3,
    "unit": 511,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "L3-7 - BALCONY",
    "exteriorSqFt": 54.6,
    "address": "72 Townsend Unit #511",
    "floor": 5,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1106,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL.png"
  },
  {
    "plan": "N",
    "planId": "N",
    "release": 3,
    "unit": 508,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "N BMR - BALCONY",
    "exteriorSqFt": 53.9,
    "address": "72 Townsend Unit #508",
    "floor": 5,
    "story": 1,
    "width": 42,
    "interiorSqFt": 1005,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planN.png"
  },
  {
    "plan": "O",
    "planId": "O",
    "release": 3,
    "unit": 507,
    "tract": "4779-3",
    "elevation": "A",
    "elevationDescription": "O",
    "exteriorSqFt": 0,
    "address": "72 Townsend Unit #507",
    "floor": 5,
    "story": 1,
    "width": 27,
    "interiorSqFt": 851,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planO.png"
  },
  {
    "plan": "P45",
    "planId": "P",
    "release": 3,
    "unit": 506,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "P45 - BALCONY",
    "exteriorSqFt": 64,
    "address": "72 Townsend Unit #506",
    "floor": 5,
    "story": 1,
    "width": 41,
    "interiorSqFt": 1176,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planP.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 3,
    "unit": 512,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "Q - BALCONY",
    "exteriorSqFt": 66.6,
    "address": "72 Townsend Unit #512",
    "floor": 5,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "A4-8",
    "planId": "A",
    "release": 4,
    "unit": 601,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "A4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #601",
    "floor": 6,
    "story": 1,
    "width": 22,
    "interiorSqFt": 788,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B6",
    "planId": "B",
    "release": 4,
    "unit": 602,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "B6 BMR - BALCONY",
    "exteriorSqFt": 49,
    "address": "72 Townsend Unit #602",
    "floor": 6,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1198,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C4-8",
    "planId": "C",
    "release": 4,
    "unit": 603,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "C4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #603",
    "floor": 6,
    "story": 1,
    "width": 22,
    "interiorSqFt": 785,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D67",
    "planId": "D",
    "release": 4,
    "unit": 604,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "D67 BMR - BALCONY",
    "exteriorSqFt": 60,
    "address": "72 Townsend Unit #604",
    "floor": 6,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1182,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E4-7",
    "planId": "E",
    "release": 4,
    "unit": 605,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "E4-7 - BALCONY",
    "exteriorSqFt": 53.75,
    "address": "72 Townsend Unit #605",
    "floor": 6,
    "story": 1,
    "width": 23,
    "interiorSqFt": 632,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "J3-7",
    "planId": "J",
    "release": 4,
    "unit": 609,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "J3-7 - BALCONY",
    "exteriorSqFt": 49.8,
    "address": "72 Townsend Unit #609",
    "floor": 6,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1136,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 4,
    "unit": 610,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "K3-8 - BALCONY",
    "exteriorSqFt": 50.9,
    "address": "72 Townsend Unit #610",
    "floor": 6,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L3-7",
    "planId": "L",
    "release": 4,
    "unit": 611,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "L3-7 - BALCONY",
    "exteriorSqFt": 54,
    "address": "72 Townsend Unit #611",
    "floor": 6,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1106,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL.png"
  },
  {
    "plan": "N",
    "planId": "N",
    "release": 4,
    "unit": 608,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "N - BALCONY",
    "exteriorSqFt": 47,
    "address": "72 Townsend Unit #608",
    "floor": 6,
    "story": 1,
    "width": 42,
    "interiorSqFt": 1005,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planN.png"
  },
  {
    "plan": "O",
    "planId": "O",
    "release": 4,
    "unit": 607,
    "tract": "4779-3",
    "elevation": "A",
    "elevationDescription": "O",
    "exteriorSqFt": 0,
    "address": "72 Townsend Unit #607",
    "floor": 6,
    "story": 1,
    "width": 27,
    "interiorSqFt": 851,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planO.png"
  },
  {
    "plan": "P67",
    "planId": "P",
    "release": 4,
    "unit": 606,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "P67 - BALCONY",
    "exteriorSqFt": 61,
    "address": "72 Townsend Unit #606",
    "floor": 6,
    "story": 1,
    "width": 41,
    "interiorSqFt": 1090,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planP.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 4,
    "unit": 612,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "Q - BALCONY",
    "exteriorSqFt": 69,
    "address": "72 Townsend Unit #612",
    "floor": 6,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "A4-8",
    "planId": "A",
    "release": 5,
    "unit": 701,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "A4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #701",
    "floor": 7,
    "story": 1,
    "width": 22,
    "interiorSqFt": 788,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B7",
    "planId": "B",
    "release": 5,
    "unit": 702,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "B7 - BALCONY",
    "exteriorSqFt": 49,
    "address": "72 Townsend Unit #702",
    "floor": 7,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1212,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C4-8",
    "planId": "C",
    "release": 5,
    "unit": 703,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "C4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #703",
    "floor": 7,
    "story": 1,
    "width": 22,
    "interiorSqFt": 785,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D67",
    "planId": "D",
    "release": 5,
    "unit": 704,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "D67 - BALCONY",
    "exteriorSqFt": 60,
    "address": "72 Townsend Unit #704",
    "floor": 7,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1182,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E4-7",
    "planId": "E",
    "release": 5,
    "unit": 705,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "E4-7 - BALCONY",
    "exteriorSqFt": 53.75,
    "address": "72 Townsend Unit #705",
    "floor": 7,
    "story": 1,
    "width": 23,
    "interiorSqFt": 632,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "J3-7",
    "planId": "J",
    "release": 5,
    "unit": 709,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "J3-7 - BALCONY",
    "exteriorSqFt": 49.8,
    "address": "72 Townsend Unit #709",
    "floor": 7,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1136,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 5,
    "unit": 710,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "K3-8 BMR - BALCONY",
    "exteriorSqFt": 50.9,
    "address": "72 Townsend Unit #710",
    "floor": 7,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L3-7",
    "planId": "L",
    "release": 5,
    "unit": 711,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "L3-7 - BALCONY",
    "exteriorSqFt": 54,
    "address": "72 Townsend Unit #711",
    "floor": 7,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1106,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL.png"
  },
  {
    "plan": "N",
    "planId": "N",
    "release": 5,
    "unit": 708,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "N - BALCONY",
    "exteriorSqFt": 47,
    "address": "72 Townsend Unit #708",
    "floor": 7,
    "story": 1,
    "width": 42,
    "interiorSqFt": 1005,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planN.png"
  },
  {
    "plan": "O",
    "planId": "O",
    "release": 5,
    "unit": 707,
    "tract": "4779-3",
    "elevation": "A",
    "elevationDescription": "O",
    "exteriorSqFt": 0,
    "address": "72 Townsend Unit #707",
    "floor": 7,
    "story": 1,
    "width": 27,
    "interiorSqFt": 851,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planO.png"
  },
  {
    "plan": "P67",
    "planId": "P",
    "release": 5,
    "unit": 706,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "P67 - BALCONY",
    "exteriorSqFt": 61,
    "address": "72 Townsend Unit #706",
    "floor": 7,
    "story": 1,
    "width": 41,
    "interiorSqFt": 1090,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planP.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 5,
    "unit": 712,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "Q - BALCONY",
    "exteriorSqFt": 69,
    "address": "72 Townsend Unit #712",
    "floor": 7,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "A4-8",
    "planId": "A",
    "release": 6,
    "unit": 801,
    "tract": "4779-3",
    "elevation": "X",
    "elevationDescription": "A4-8 BMR - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #801",
    "floor": 8,
    "story": 1,
    "width": 22,
    "interiorSqFt": 788,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planA.png"
  },
  {
    "plan": "B458",
    "planId": "B",
    "release": 6,
    "unit": 802,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "B458 - BALCONY",
    "exteriorSqFt": 52,
    "address": "72 Townsend Unit #802",
    "floor": 8,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1289,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planB.png"
  },
  {
    "plan": "C4-8",
    "planId": "C",
    "release": 6,
    "unit": 803,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "C4-8 - BALCONY",
    "exteriorSqFt": 50.6,
    "address": "72 Townsend Unit #803",
    "floor": 8,
    "story": 1,
    "width": 22,
    "interiorSqFt": 785,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planC.png"
  },
  {
    "plan": "D458",
    "planId": "D",
    "release": 6,
    "unit": 804,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "D458 - BALCONY",
    "exteriorSqFt": 60,
    "address": "72 Townsend Unit #804",
    "floor": 8,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1260,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planD.png"
  },
  {
    "plan": "E8",
    "planId": "E",
    "release": 6,
    "unit": 805,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "E8 - TERRACE/PAVER PATIO & BALCONY",
    "exteriorSqFt": 916,
    "address": "72 Townsend Unit #805",
    "floor": 8,
    "story": 1,
    "width": 23,
    "interiorSqFt": 643,
    "bedrooms": 1,
    "baths": 1,
    "garage": 0,
    "planImage": "../../images/plans/planE.png"
  },
  {
    "plan": "J8",
    "planId": "J",
    "release": 6,
    "unit": 806,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "J8 - TERRACE/PAVER PATIO & BALCONY",
    "exteriorSqFt": 908.8,
    "address": "72 Townsend Unit #806",
    "floor": 8,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1172,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planJ8.png"
  },
  {
    "plan": "K3-8",
    "planId": "K",
    "release": 6,
    "unit": 807,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "K3-8 - BALCONY",
    "exteriorSqFt": 50.9,
    "address": "72 Townsend Unit #807",
    "floor": 8,
    "story": 1,
    "width": 21,
    "interiorSqFt": 1219,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planK.png"
  },
  {
    "plan": "L8",
    "planId": "L",
    "release": 6,
    "unit": 808,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "L8 - BALCONY",
    "exteriorSqFt": 54.2,
    "address": "72 Townsend Unit #808",
    "floor": 8,
    "story": 1,
    "width": 38,
    "interiorSqFt": 1101,
    "bedrooms": 2,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planL8.png"
  },
  {
    "plan": "Q",
    "planId": "Q",
    "release": 6,
    "unit": 809,
    "tract": "4779-3",
    "elevation": "B",
    "elevationDescription": "Q - BALCONY",
    "exteriorSqFt": 69.3,
    "address": "72 Townsend Unit #809",
    "floor": 8,
    "story": 1,
    "width": 23,
    "interiorSqFt": 900,
    "bedrooms": 1,
    "baths": 1.5,
    "garage": 0,
    "planImage": "../../images/plans/planQ.png"
  },
  {
    "plan": "R",
    "planId": "R",
    "release": 7,
    "unit": 901,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "R -TWO (2) TERRACES/PAVER PATIOs W/1 BALCONY",
    "exteriorSqFt": 488.75,
    "address": "72 Townsend Unit #901",
    "floor": 9,
    "story": 1,
    "width": 55,
    "interiorSqFt": 1740,
    "bedrooms": 3,
    "baths": 2.5,
    "garage": 0,
    "planImage": "../../images/plans/planR.png"
  },
  {
    "plan": "S",
    "planId": "S",
    "release": 7,
    "unit": 902,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "S -TWO (2) TERRACES/PAVER PATIOs W/1 BALCONY",
    "exteriorSqFt": 802,
    "address": "72 Townsend Unit #902",
    "floor": 9,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1722,
    "bedrooms": 3,
    "baths": 2,
    "garage": 0,
    "planImage": "../../images/plans/planS.png"
  },
  {
    "plan": "T",
    "planId": "T",
    "release": 7,
    "unit": 903,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "T - TERRACE/PAVER PATIO",
    "exteriorSqFt": 517,
    "address": "72 Townsend Unit #903",
    "floor": 9,
    "story": 1,
    "width": 45,
    "interiorSqFt": 1571,
    "bedrooms": 3,
    "baths": 2.5,
    "garage": 0,
    "planImage": "../../images/plans/planT.png"
  },
  {
    "plan": "U ",
    "planId": "U",
    "release": 7,
    "unit": 904,
    "tract": "4779-3",
    "elevation": "T",
    "elevationDescription": "U - TERRACEPAVER PATIO",
    "exteriorSqFt": 510,
    "address": "72 Townsend Unit #904",
    "floor": 9,
    "story": 1,
    "width": 39,
    "interiorSqFt": 1444,
    "bedrooms": 2,
    "baths": 2.5,
    "garage": 0,
    "planImage": "../../images/plans/planU.png"
  },
  // {
  //   "plan": "TH",
  //   "planId": "TH",
  //   "release": 8,
  //   "unit": 100,
  //   "tract": "4779-3",
  //   "elevation": "A",
  //   "elevationDescription": "TH - TOWNHOUSE",
  //   "exteriorSqFt": 0,
  //   "address": "72 Townsend Unit #100",
  //   "floor": 1-2,
  //   "story": 2,
  //   "width": 24,
  //   "interiorSqFt": 3300,
  //   "bedrooms": 3,
  //   "baths": 3.5,
  //   "garage": 0,
  //   "planImage": "TH"
  // }
]

$scope.displayUnit = function displayUnit(num){
		var unit = $filter('filter')($scope.test, {unit:num})
 		$scope.unit = unit[0]
 		console.log($scope.unit[0])
 		$scope.floorHidden = true;
}


});
