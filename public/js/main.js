angular.module('new-metal-archives', ['ngRoute','ngResource'])
  .config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push('Interceptor');
    
    $routeProvider.when('/bands', {
      templateUrl: 'partials/bands.html',
      controller: 'BandsController'
    });

    $routeProvider.when('/band/:band_id', {
      templateUrl: 'partials/band.html',
      controller: 'BandController'
    });

    $routeProvider.when('/band', {
      templateUrl: 'partials/band.html',
      controller: 'BandController'
    });
    
    $routeProvider.when('/artists', {
      templateUrl: 'partials/artists.html',
      controller: 'ArtistsController'
    });

    $routeProvider.when('/artist/:artist_id', {
      templateUrl: 'partials/artist.html',
      controller: 'ArtistController'
    });

    $routeProvider.when('/artist', {
      templateUrl: 'partials/artist.html',
      controller: 'ArtistController'
    });

    $routeProvider.when('/auth', {
      templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({redirectTo: '/bands'});
});
