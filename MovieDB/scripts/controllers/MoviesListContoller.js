angular.module("moviedb").controller("MoviesListController",
	["$scope", "$log", "APIClient", "URL", "paths", function($scope, $log, APIClient, URL, paths){

		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.url = URL.resolve;

		// Scope methods
		$scope.getMovieDetailURL = function(movie){
			return URL.resolve(paths.movieDetail, {id:movie.id});
		}

		// Controller start
		$scope.uiState = "loading";
		APIClient.getMovies().then(

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