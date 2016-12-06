var app= angular.module("BCD",["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/equipos", {
    templateUrl : "equipos.html"
  })
  .when("/partidas", {
    templateUrl : "partidas.html"
  })
  .when("/pabellones", {
    templateUrl : "pabellones.html"
  })
  .when("/calendario", {
    templateUrl : "calendario.html"
  }).when("/about", {
    templateUrl : "about.html"
  });
});