var app= angular.module("BCD",["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/equipos", {
    templateUrl : "app/equipos.html"
  })
  .when("/partidas", {
    templateUrl : "app/partidas.html"
  })
  .when("/pabellon", {
    templateUrl : "app/pabellon.html"
  })
  .when("/calendario", {
    templateUrl : "app/calendario.html"
  }).when("/about", {
    templateUrl : "app/about.html"
  });
});