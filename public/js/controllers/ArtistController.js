angular.module('new-metal-archives').controller('ArtistController',
  function($scope, $routeParams, Artist){
    if($routeParams.artist_id){
      Artist.get({id: $routeParams.artist_id},
        function(artist){
          $scope.artist = artist;
        },
        function(err){
          $scope.message = {text: "Unable to get the artist"};
          console.log(err);
        }
      );
    }
    else{
      $scope.artist = new Artist();
    }

    $scope.save = function(){
      $scope.artist.$save()
        .then(function(){
          $scope.message = {text: "Done!"};
          $scope.artist = new Artist();
        })
        .catch(function(){
          $scope.message = {text: "Unable to save."};
        });
    };
});
