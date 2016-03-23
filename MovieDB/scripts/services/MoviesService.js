angular.module("moviedb").service("MoviesService", 
	["$http", "$q", "api_paths", "URL", function($http, $q, api_paths, URL){



		this.apiRequest = function(url){

			var deferred = $q.defer();
			$http.get(url).then(

				function(response){
					deferred.resolve(response.data);
				},

				function(response){
					deferred.reject(response.data);
				}

			);

			return deferred.promise;

		}


		this.getMovies = function(){
			return this.apiRequest(api_paths.movies);
			
		};

		this.getMovie = function(movieId){
			var url = URL.resolve(api_paths.movieDetail, {id: movieId});
			return this.apiRequest(url);


		};

	}]
);