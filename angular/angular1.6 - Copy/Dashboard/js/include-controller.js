app.controller('ExampleController', function($scope,myservice) {
    $scope.templates = 'template1.html';
    $scope.myservice = myservice;
    myservice.show= false;
  });