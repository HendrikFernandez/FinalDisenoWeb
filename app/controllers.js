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
});

app.controller("PartidaController",function($scope,$http){
	$http.get("api/partida").then(function(request){
		$scope.partidas = request.data;
	},function(error){
		alert(error);
	});
	$scope.verEstadistica = function(partida){
		$scope.jugadores1 = partida.estadisticas.equipo1.jugadores;
		$scope.casa = partida.estadisticas.equipo1.nombre;
		$scope.jugadores2 = partida.estadisticas.equipo2.jugadores;
		$scope.visitante = partida.estadisticas.equipo2.nombre;
		console.log($scope.selected);
	}
});