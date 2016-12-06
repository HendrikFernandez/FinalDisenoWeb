var express = require('express');
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', express.static(path.join(__dirname, 'app')));

app.listen(process.env.PORT || 3000, function(){
	console.log("Se ha inicializado con exito!")
});
