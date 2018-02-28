 app.controller("studentController", function ($scope, $routeParams, myservice, $location) {
    $scope.username = $routeParams.username;
    /*$scope.forward = function(username) {          
    $location.path('/ThemeSetting/' + $scope.username);
    $scope.username = $routeParams.username;    
};*/
$scope.myservice = myservice;
/*$("#submit").click(function(event){  
    $scope.obj1= $('#formdata').serializeJson();
    $scope.jsonFormData = JSON.stringify($scope.obj1);
    var vardata = [localStorage.getItem($scope.firstName)];
   // console.log(vardata);
    //console.log($scope.jsonFormData);
    $scope.userprofileData= vardata.push($scope.jsonFormData);
   // console.log(vardata);
    //console.log($scope.userprofileData);
    localStorage.setItem($scope.firstName +" "+"Profiledata", vardata );
    //console.log(localStorage.getItem($scope.firstName));

    event.preventDefault();

  });*/
});