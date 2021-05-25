angular.module('mainApp',['ngRoute','homeModule','serviceModule','contactModule'])
.config([ '$routeProvider',($routeProvider)=>{
    $routeProvider
    .when("/home",{templateUrl:'app/components/home/homeView.html',
    controller:'homeController'})
    .when("/service",{templateUrl:'app/components/service/serviceView.html',
    controller:'serviceController'})    
    .when("/contact",{templateUrl:'app/components/contact/contacthomeView.html',
    controller:'contactController'})
    .otherwise({redirectTo:'/home'});
}]);
