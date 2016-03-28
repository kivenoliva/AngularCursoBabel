angular.module("moviedb").controller("MovieDetailController",
	["$scope", "APIClient", "$routeParams", "$location", "paths",
	function($scope, APIClient, $routeParams ,$location, paths){

		// Scope init
		$scope.uiState = "loading";
		$scope.model = {};

		
		// Controller init
		APIClient.getMovie($routeParams.id).then(


			//pelicula encontrada
			function(movie){
				$scope.model = movie;
				$scope.uiState = 'ideal';
				$scope.$emit("ChangeTitle", $scope.model.title);

			},

			//fallo
			function(error){
				$location.url(paths.notFound);
			}

		);


	}]


);