angular.module("moviedb").service("MoviesService", ["$http", "$q", function($http, $q){

	this.getMovies = function(){
		
		var deferred = $q.defer();
		$http.get("/api/movies/").then(

			function(response){
				deferred.resolve(response.data);
			},

			function(response){
				deferred.reject(response.data);
			}

		);

		return deferred.promise;
	};



}]);