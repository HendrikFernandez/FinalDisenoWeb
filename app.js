var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('app'));

app.use('/', express.static('app'));
app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.get("/api/calendario",function(req,res){
	var data = [
		{

		"fecha":"21/12/2016",
		"equipo":"Bella Vista Vs. Los Alcarrizos",
		"hora":"15:00",
		"pabellon":"Bella Vista"

		},

		{

		"fecha":"22/12/2016",
		"equipo":"Los Rios Vs. Bella Vista",
		"hora":"12:00",
		"pabellon":"Los rios"

		},

		{

		"fecha":"26/12/2016",
		"equipo":"Los Alcarrizos Vs. Los Rios",
		"hora":"20:00",
		"pabellon":"Los Alcarrizos"

		}

	];
	res.send(JSON.stringify(data));
	
});

app.get("/api/pabellon",function(req,res){
	var data = [

		{
		"nombre":"Pabellon de Bella Vista",
		"direccion":"Desiderio Arias #34",
		"asientos":100},

		{

		"nombre":"Pabellon de Los Rios",
		"direccion":"Calle Proyecto #34",
		"asientos":180
		},

		{
		"nombre":"Pabellon Los Alcarrizos",
		"direccion":"Autopista Duarte #1003",
		"asientos":9001
		}
	];
		res.send(JSON.stringify(data));

});
app.get("/api/partida",function(req,res){
	var data = [
		{
			"fecha":"1/12/2016",
			"pabellon":"Bella Vista",
			"equipos":"Bella Vista Vs. Los Rios",
			"estadisticas":{
				"equipo1":{
					"nombre":"Bella Vista",
					"jugadores":[{
						"nombre":"Papolo",
						"puntos":"34",
						"dunkeos":4,
						"rebotes":7
					},
					{
						"nombre":"Hendrik",
						"puntos":"100",
						"dunkeos":40,
						"rebotes":1
					}]
				},
				"equipo2":{
					"nombre":"Los Rios",
					"jugadores":[{
						"nombre":"Norman",
						"puntos":"60",
						"dunkeos":7,
						"rebotes":3
					},
					{
						"nombre":"Adelina",
						"puntos":"500",
						"dunkeos":70,
						"rebotes":60
					}]
				}
			}
		}

	];
	res.send(JSON.stringify(data));
});

app.get("/api/equipos",function(req,res){
	var data = [{
		"nombre": "Bella Vista",
		"logo": "img/bellavista.png",
		"jugadores":[{
			"nombre":"Hendrik Fernandez",
			"dorsal":23,
			"posicion":"Pívot",
			"estatura":6.0
		},
		{
			"nombre":"Norman Fernandez",
			"dorsal":12,
			"posicion":"Ala-pívot",
			"estatura":5.9
		},
		{
			"nombre":"Adelina Fernandez",
			"dorsal":1,
			"posicion":"Escolta",
			"estatura":3.5
		},
		{
			"nombre":"Aldemir Fernandez",
			"dorsal":13,
			"posicion":"Base",
			"estatura":4.3
		},
		{
			"nombre":"Elias Cedeño",
			"dorsal":22,
			"posicion":"Alero",
			"estatura":3.9
		}]

	}];
	res.send(JSON.stringify(data));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Se ha inicializado con exito!")
});
