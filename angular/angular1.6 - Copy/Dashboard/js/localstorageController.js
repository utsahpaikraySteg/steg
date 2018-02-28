app.controller('localstorage',function($scope){
    $("input[type=button]").click(function(){
      var name=$("#userName").val();
      $scope.name=$("#textarea").val();
      $scope.laod =$('#textareavalue').val();
      localStorage.setItem($scope.name,$scope.laod);
      
    });
  });