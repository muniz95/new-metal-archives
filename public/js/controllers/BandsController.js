angular.module('new-metal-archives').controller('BandsController',
  function($scope, Band){
    $scope.bands = [];
    $scope.filter = '';
    $scope.message = {text: ''};

    function findBands(){
      Band.query(
        function(bands){
          $scope.bands = bands;
        },
        function(err){
          console.log("Unable to get the bands list.");
          console.log(err);
        }
      );
    }

    findBands();

    $scope.remove = function(band){
      Band.delete({id: band._id},
        findBands,
        function(err){
          console.log("Unable to remove the band.");
          console.log(err);
        }
      );
    };
});
