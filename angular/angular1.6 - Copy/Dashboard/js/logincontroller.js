app.controller("loginController", function ($scope, $location, myservice) {
    $scope.authenticate = function () {          
        $location.path('/student')
        alert("user");
    };
    $scope.myservice = myservice;
    myservice.show= true;
    console.log("true");
});