var express = require('express');
var path = require('path');


var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', express.static(path.join(__dirname, 'app')));
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

app.listen(process.env.PORT || 3000, function(){
	console.log("Se ha inicializado con exito!")
});
