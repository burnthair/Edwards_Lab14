var app = angular.module('catDog');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: 'home.html'
    })
    .when('/dog', {
      controller: 'dogCtrl',
      templateUrl: 'dog.html'
    })
    .when('/cat', {
      controller: 'catCtrl',
      templateUrl: 'cat.html'
    })
    .when('/error', {
      templateUrl: 'error.html'
    })
    .otherwise({
      redirectTo: '/error'
    })
});
