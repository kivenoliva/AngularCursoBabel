angular.module("moviedb").controller("AppController",
	["$scope", function($scope){

		// Model init
		$scope.model = {
			title: ""
		}	
		
		// Scope event listener
		$scope.$on("OnMenuChange", function(evento, data){
			$scope.model.title = data;
		});

	
	}]

);