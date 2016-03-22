angular.module("moviedb").service("MoviesService", ["$http", function($http){

	this.getMovies = function(){
		return $http.get("/api/movies/");
	};



}]);