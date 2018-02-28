app.controller("theme", function ($scope, $location, $routeParams, myservice, $http) {
    $scope.myservice = myservice;
    $scope.username = $routeParams.username;
    $("#myFile").click(function(){
    $scope.Image=document.getElementById("myFile").files[0].name;
    alert($scope.Image);
     });
    
    //Manipulate your google font data
    $http.get("googleFonts.json")
    .then(function(response) {
        $scope.GoogleFontInfo = response.data;
       
        $.each($scope.GoogleFontInfo, function(i, item) {        
            $scope.GoogleFont = $scope.GoogleFontInfo[i];
           // console.log($scope.GoogleFont);
        });

      /*  $scope.authenticateUser = function (username) {          
            $.each( $scope.info, function(i, item) {        
                myservice.checkName = $scope.info[i].userName;              
               
            })         
        }; */
    }, function myError(response) {
        $scope.info = response.statusText

    });
    //manipulation end here
    //============================================================//
//connect with feather js
/*$("#savedata").click(function(event){  
    //$scope.obj= $('#my-profile').serializeJson();
    $scope.obj= $('#my-profile').serializeJson();
    console.log($scope.obj);
    //$scope.jsonString = JSON.parse($scope.obj);
    //console.log($scope.jsonString);
    //$scope.jsonString = JSON.stringify($scope.obj);
    $.ajax({
        url: 'http://localhost:3030/messages',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data:$scope.obj,
        success: function( data, textStatus, jQxhr ){
            alert("data post successly");
            //$('#response pre').html( data );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

    //e.preventDefault();
});*/

$scope.theme = {};
$scope.submitTheme = function(theme){
    console.log(theme);

    $http({
        method : "POST",
        url : "http://localhost:3030/messages",
        data : theme
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
}

//connection end here

// $("#savedata").click(function(event){  
//     $scope.obj= $('#my-profile').serializeJson();
//     $scope.jsonString = JSON.stringify($scope.obj);
//     // $scope.vardata = localStorage.getItem($scope.Name);

//     localStorage.setItem($scope.Name,$scope.jsonString);

//     event.preventDefault();

// });
//    function setJson(){
//        $scope.all = [];
//        for (i = 0,j=localStorage.length; i<j; i++) {

//         $scope.all[i] = JSON.parse(localStorage.getItem(localStorage.key(i)).split(';'));
//        }
//        return $scope.all;
//    }
//      function getJson(console){
//            $scope.obj = setJson();
//            //console.log($scope.obj);
//            console.save = function(obj, filename){
       
//                if(!obj) {
//                    console.error('Console.save: No data')
//                    return;
//                }
       
//                if(!filename) filename = 'console.json'
       
//                if(typeof obj === "object"){
//                    obj = JSON.stringify(obj, undefined, 4)
//                }
       
//                $scope.blob = new Blob([obj], {type: 'text/json'}),
//                    e    = document.createEvent('MouseEvents'),
//                    a    = document.createElement('a')
       
//                a.download = filename
//                a.href = window.URL.createObjectURL($scope.blob)
//                a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//                e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//                a.dispatchEvent(e)
//            }
//            console.save($scope.obj,"file.json");
//        };
//        $("#getJson").click(function(){ 
//            getJson(console);
//        });

      
    
       //====================================================
   });