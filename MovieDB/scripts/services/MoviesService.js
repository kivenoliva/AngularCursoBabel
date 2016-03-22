angular.module("moviedb").service("MoviesService", ["$q", "$timeout", function($q, $timeout){

	var movies = [
			{
				"title":"Deadpool",
				"poster_url":"https://image.tmdb.org/t/p/w185/kS3pI9nSLZuX8CAzaQOBF6mQ3uX.jpg",
				"rating":7.2,
				"release_data":"2016-02-18"
			},
			{
				"title":"Mad Max: Furia en la carretera",
				"poster_url":"https://image.tmdb.org/t/p/w185/xHfhQIK4BNlsGv5Ylx8mVq0hJT1.jpg",
				"rating":7.4,
				"release_data":"2015-05-15"
			},
            {
                "title": "Zootopia",
                "poster_url": "https://image.tmdb.org/t/p/w185/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
                "rating": 7.4,
                "release_date": "2016-02-12"
            },
			{
				"title":"Los odiosos 8",
				"poster_url":"https://image.tmdb.org/t/p/w185/qC6EfdhPW6X3zjRvLsflayI9cKy.jpg",
				"rating":8,
				"release_data":"2016-01-08"
			},
			{
                "title": "Batman v Superman: Dawn of Justice",
                "poster_url": "https://image.tmdb.org/t/p/w185/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
                "rating": 5.1,
                "release_date": "2016-03-23"
            }
		];

	this.getMovies = function(){

		//Creamos el objeto diferido
		var deferred = $q.defer();

		$timeout(function(){
			if (Math.round(Math.random() * 10) %2 == 0){
				deferred.resolve(movies);
			}else{
				deferred.reject({error:"Forbidden"});
			}
		}, 500);
		
		//devolvemos la promesa del objeto diferido
		return deferred.promise;
	};



}]);