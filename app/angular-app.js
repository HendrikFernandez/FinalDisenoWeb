var app= angular.module("BCD",["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/equipos", {
    templateUrl : "equipos.html"
  })
  .when("/partidas", {
    templateUrl : "partidas.html"
  })
  .when("/pabellon", {
    templateUrl : "pabellon.html"
  })
  .when("/calendario", {
    templateUrl : "calendario.html"
  }).when("/about", {
    templateUrl : "about.html"
  });
});