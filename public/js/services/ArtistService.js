angular.module('new-metal-archives').factory('Artist', function($resource){
  return $resource('/artists/:id');
});
