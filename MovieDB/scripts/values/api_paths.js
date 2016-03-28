angular.module("moviedb").value("api_paths", {
	movies: "/api/movies/",
	movieDetail: "/api/movies/:id",
	series: "/api/series/",
	serieDetail: "/api/series/:id"
});