angular.module("moviedb").controller("AppController",
	["$scope", "$location", "paths", function($scope, $location, paths){


		var controller = this;
		// Controller propierties
		controller.titles = {};
		controller.titles[paths.movies] = "Movies List";
		controller.titles[paths.series] = "Series List";
		controller.titles[paths.people] = "People List";
			

		// Model init
		$scope.model = {
			title: ""
		}	
		
		// Scope event listener
		$scope.$on("$locationChangeSuccess", function(evt, locationRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
		});

		$scope.$on("ChangeTitle", function(event, title){
			$scope.model.title = title;

		});
	
	}]

);