app.controller('dashboard-cntr',function($scope,myservice){
  $scope.myservice = myservice;
    $scope.image=
          [
              {
                "ImageSrc": "image/1.svg",
                "CustomerID": "Happy"
              },
              {
                "ImageSrc": "image/2.svg",
                "CustomerID": "Ashish"
              },
              {
                "ImageSrc": "image/3.svg",
                "CustomerID": "Utsah"
              }
          ];
          $scope.selectedName =  $scope.image[0].ImageSrc;
          $scope.fcolor="green";
          $scope.bcolor="#abcdef";
              
          
      });