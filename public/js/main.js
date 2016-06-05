angular.module('new-metal-archives', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/bands', {
      templateUrl: 'partials/bands.html',
      controller: 'BandsController'
    });

    $routeProvider.when('/band/:band_id', {
      templateUrl: 'partials/band.html',
      controller: 'BandController'
    });

    $routeProvider.otherwise({redirectTo: '/bands'});
});
