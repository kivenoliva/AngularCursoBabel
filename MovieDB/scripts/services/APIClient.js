angular.module("moviedb").service("APIClient", 
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

		this.getSeries = function(){
			return this.apiRequest(api_paths.series);
			
		};

		this.getSerie = function(movieId){
			var url = URL.resolve(api_paths.serieDetail, {id: serieId});
			return this.apiRequest(url);


		};

	}]
);