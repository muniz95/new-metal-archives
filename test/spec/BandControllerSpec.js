describe('BandController', function(){

  var $scope;

  beforeEach(function{
    module('new-metal-archives');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
    })
  });

  it('Create an empty band if there is no route passed', inject(function($controller){
    $controller('BandController', {'$scope': $scope});
    expect($scope.band._id).toBeUndefined();
  }));
});
