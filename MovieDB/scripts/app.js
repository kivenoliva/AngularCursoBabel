//Defino el módulo "moviedb"
angular.module("moviedb", ['ngRoute']).config(
	["$routeProvider", "paths", function($routeProvider, paths){

		//Configuro las url de la aplicación
		$routeProvider.when(paths.movies, {
			templateUrl: "views/MoviesList.html"
		}).when(paths.home, {
			redirectTo: "/movies"
		}).when(paths.series, {
			templateUrl: "views/SeriesList.html"
		}).when(paths.people, {
			templateUrl: "views/PeopleList.html"
		}).otherwise({
			templateUrl: "views/404.html"
		})

	}]


);