angular.module('new-metal-archives').controller('ArtistsController',
  function($scope, Artist){
    $scope.artists = [];
    $scope.filter = '';
    $scope.message = {text: ''};

    function findArtists(){
      Artist.query(
        function(artists){
          $scope.artists = artists;
        },
        function(err){
          console.log("Unable to get the artists list.");
          console.log(err);
        }
      );
    }

    findArtists();

    $scope.remove = function(artist){
      Artist.delete({id: artist._id},
        findArtists,
        function(err){
          console.log("Unable to remove the artist.");
          console.log(err);
        }
      );
    };
});
