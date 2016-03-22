angular.module("moviedb").controller("MoviesListController",
	["$scope", "$log", "MoviesService", function($scope, $log, MoviesService){

		// Scope init
		$scope.uiState = "loading";

		// Scope model init
		$scope.model = [];

		// Controller start
		$scope.uiState = "loading";
		MoviesService.getMovies().then(

			//primero siempre el succes
			function(response){
				$scope.model = response.data;

				if(response.data.length == 0){
					$scope.uiState = "blank";
				}else{
					$scope.uiState = "ideal";
				}
			},

			//segundo si ha habido error
			function(response){
				$log.error("Error", response);
				$scope.uiState = "error";
			}
		);
	}]

);