angular.module("moviedb").controller("SerieDetailController",
	["$scope", "APIClient", "$routeParams", "$location", "paths",
	function($scope, APIClient, $routeParams ,$location, paths){

		// Scope init
		$scope.uiState = "loading";
		$scope.model = {};

		
		// Controller init
		APIClient.getSerie($routeParams.id).then(


			//pelicula encontrada
			function(serie){
				$scope.model = serie;
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