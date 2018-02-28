app.config(function($routeProvider) {
     $routeProvider
        .when("/login", {
         templateUrl : "login.html",
         controller:'httpData'
        })
        .when("/ThemeSetting", {
         templateUrl : "theme.html",
         controller: 'theme'
               
    })
    .when("/student", {
     templateUrl : "student.html",
     controller: 'studentController'
    })
          
 });