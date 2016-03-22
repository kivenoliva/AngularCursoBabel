angular.module("moviedb").controller("AppController",
	["$scope", "$location", function($scope, $location){


		var controller = this;
		// Controller propierties
		controller.titles = {
			"/movies": "Movies List",
			"/series": "Series List",
			"/people": "People List"
		};

		// Model init
		$scope.model = {
			title: ""
		}	
		
		// Scope event listener
		$scope.$on("$locationChangeSuccess", function(evt, locationRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
		});

	
	}]

);