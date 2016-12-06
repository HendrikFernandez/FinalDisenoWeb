var calendario = angular.module("BCD");

calendario.controller("CalendarioController",function($scope,$http){
	$http.get("api/calendario").then(function(request){
		$scope.calendarios = request.data;
	},function(error){
		alert(error);
	})
})