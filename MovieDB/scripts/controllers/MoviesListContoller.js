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
			function(data){
				$scope.model = data;

				if(data.length == 0){
					$scope.uiState = "blank";
				}else{
					$scope.uiState = "ideal";
				}
			},

			//segundo si ha habido error
			function(data){
				$log.error("Error", data);
				$scope.uiState = "error";
			}
		);
	}]

);