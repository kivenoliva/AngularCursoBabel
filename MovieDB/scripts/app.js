//Defino el módulo "moviedb"
angular.module("moviedb", ['ngRoute']).config(
	["$routeProvider", function($routeProvider){

		//Configuro las url de la aplicación
		$routeProvider.when("/movies", {
			templateUrl: "views/MoviesList.html"
		}).when("/", {
			redirectTo: "/movies"
		}).when("/series", {
			templateUrl: "views/SeriesList.html"
		}).when("/people", {
			templateUrl: "views/PeopleList.html"
		}).otherwise({
			templateUrl: "views/404.html"
		})

	}]


);