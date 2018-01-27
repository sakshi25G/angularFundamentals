var app = angular.module("appRoutes",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    // $urlRouterProvider.otherwise('/');

    // $stateProvider
    //     .state('Login',{
    //         url : "/Login",
    //         templateUrl : "/app/components/login/login.html"
    //     })

    var login = {
        name : "login",
        url : "/login",
        templateUrl : "./app/components/login/login.html"
    }

    $stateProvider.state(login);

})