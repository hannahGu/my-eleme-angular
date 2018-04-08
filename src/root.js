import angular from 'angular';
import uiRouter from 'angular-ui-router';
// var myApp = angular.module("spicyApp1", []);
// myApp.controller("testCtrl", [
//   "$scope",
//   function($scope) {
//     $scope.name11='';
//     $scope.name = "very";
//     $scope.friends = [{name:'John', phone:'555-1276'},
//                          {name:'Mary', phone:'800-BIG-MARY'},
//                          {name:'Mike', phone:'555-4321'},
//                          {name:'Adam', phone:'555-5678'},
//                          {name:'Julie', phone:'555-8765'},
//                          {name:'Juliette', phone:'555-5678'}];
//
//
//   }
// ]);

var myApp= angular.module('eleme', [uiRouter]);
myApp.controller("testCtrl",['$scope',function($scope){
  $scope.name='333';
}]);
  myApp.config([
		'$stateProvider',
		function($stateProvider){
      var helloState = {
   name: 'hello',
   url: '/hello',
   template: '<h3>hello world!</h3>'
 }

 var aboutState = {
   name: 'about',
   url: '/about',
   template: '<h3>Its the UI-Router hello world app!</h3>'
 }
 $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}]);

// export default myApp.name;
