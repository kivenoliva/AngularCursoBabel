angular.module("moviedb").controller("MovieFormController",
	["$scope", "APIClient", function($scope, APIClient){

		//Scope init
		$scope.model = {};
		$scope.succesMessage = null;
		$scope.errorMessage = null;

		//Scope methods
		$scope.saveMovie = function(){

			APIClient.createMovie($scope.model).then(

				function(movie){
					console.log("PELICULA GUARDADA", movie);
					$scope.succesMessage = true;
					$scope.model = {};
					$scope.movieForm.$setPristine();
				},

				function(error){
					console.log("ERROR AL GUARDAR", error);
					$scope.errorMessage = true;

				}
			)
		}
		
	}]

);