angular.module("moviedb").controller("SeriesListController",
	["$scope", "APIClient", "$routeParams", "$location", "paths", "URL",
	function($scope, APIClient, $routeParams ,$location, paths, URL){

		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.url = URL.resolve;

		// Scope methods
		$scope.getSerieDetailURL = function(serie){
			return URL.resolve(paths.serieDetail, {id:serie.id});
		}

		// Controller start
		$scope.uiState = "loading";
		APIClient.getSeries().then(

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