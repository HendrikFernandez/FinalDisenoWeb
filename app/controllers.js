var app = angular.module("BCD");

app.controller("CalendarioController",function($scope,$http){
	$http.get("api/calendario").then(function(request){
		$scope.calendarios = request.data;
	},function(error){
		alert(error);
	})
});

app.controller("PabellonController",function($scope,$http){
	$http.get("api/pabellon").then(function(request){
		$scope.pabellones = request.data;
	},function(error){
		alert(error);
	})
})