angular.module('new-metal-archives').controller('BandController',
  function($scope, $routeParams, Band){
    if($routeParams.band_id){
      Band.get({id: $routeParams.band_id},
        function(band){
          $scope.band = band;
        },
        function(err){
          $scope.message = {text: "Unable to get the band"};
          console.log(err);
        }
      );
    }
    else{
      $scope.band = new Band();
    }

    $scope.save = function(){
      $scope.band.$save()
        .then(function(){
          $scope.message = {text: "Done!"};
          $scope.band = new Band();
        })
        .catch(function(){
          $scope.message = {text: "Unable to save."};
        });
    };
});
