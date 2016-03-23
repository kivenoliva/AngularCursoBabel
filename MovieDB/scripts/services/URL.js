angular.module("URL", []).service("URL", ["$log", function($log){
	
	//URL.resolve("/movies/:id", {id:3});
	this.resolve = function(url, params){

		var finalURL = [];
		var urlParts = url.split("/");
		for (var i in urlParts){
			var urlPart = urlParts[i];
			if(urlPart.substr(0,1) == ":"){
				var paramName = urlPart.substr(1);
				var paramValue = params[paramName] || null;
				if (paramValue == null){
					$log.error("URL.resolve error: ", paramName, "not found un params dict.");
					return;
				}
				finalURL.push(paramValue);
			}else{
				finalURL.push(urlPart);
			}
		}
		return finalURL.join("/");
	};
	
}]);