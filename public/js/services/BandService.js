angular.module('new-metal-archives').factory('Band', function($resource){
  return $resource('/bands/:id');
});
