//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	["$scope", function($scope){

		//Scope init
		$scope.model = {
			selectedItem: "movies"
		};

		//Scope methods
		$scope.setSelectedItem = function(data){

			$scope.model.selectedItem = data;
		};

		$scope.getClassForItem = function(data){
			if($scope.model.selectedItem == data){
				return "active";
			}else{
				return "";
			}

		}

	}]

);