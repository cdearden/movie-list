
var app = angular.module('App',[]);

app.controller('movieController', ['$scope', function($scope){
  $scope.movies = window.exampleData;
}]);
