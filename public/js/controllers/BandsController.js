angular.module('new-metal-archives').controller('BandsController',
  function($scope){
    $scope.total = 0;

    $scope.increment = function(){
      $scope.total++;
    };

    $scope.bands = [
      {
        "_id": 1,
        "name": "Dragonforce",
        "genre": "Power Metal"
      },
      {
        "_id": 2,
        "name": "Obituary",
        "genre": "Death Metal"
      },
      {
        "_id": 3,
        "name": "Mayhem",
        "genre": "Black Metal"
      }
    ];

    $scope.filter = '';
});
