//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	["$scope", "$location", "paths", function($scope, $location, paths){

		//Scope init
		$scope.model = {
			selectedItem: paths.movies
		};

		$scope.paths = paths;

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