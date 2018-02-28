app.controller('httpData',function($scope,$http,myservice, $location){
    $scope.myservice = myservice;
    $http.get("http://localhost:3030/messages")
    .then(function(response) {
        $scope.info = response.data;
       console.log($scope.info);
        $scope.authenticateUser = function (username) {         
            $.each( $scope.info, function(i, item) {    
                $scope.userLoginInfo = $scope.info[i];
                $.each($scope.userLoginInfo, function(i, item) {
                    myservice.checkName = i;            
                    if(username==myservice.checkName){
                        myservice.show=true;    
                       console.log( myservice.show);
                        myservice.colorfetch = $scope.userLoginInfo[i].color;
                        myservice.fontFamilyfetch = $scope.userLoginInfo[i].fontFamily;
                        myservice.FontSizefetch = $scope.userLoginInfo[i].FontSize;
                        myservice.OriImage = $scope.userLoginInfo[i].Image;

                       
                       }
                })     
            })
                   
        };
    });
    $scope.authenticate = function () {          
        $location.path('/student/')
      
    };
});