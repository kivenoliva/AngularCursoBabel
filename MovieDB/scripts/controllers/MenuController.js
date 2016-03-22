//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	["$scope", "$location", function($scope, $location){

		//Scope init
		$scope.model = {
			selectedItem: "movies"
		};

		//Scope methods
		$scope.getClassForItem = function(data){
			if($scope.model.selectedItem == data){
				return "active";
			}else{
				return "";
			}

		};
		
		// Scope event listener
		$scope.$on("$locationChangeSuccess", function(evt, locationRoute){
			$scope.model.selectedItem = $location.path() || "404 Not Found";
		});
		
	}]

);