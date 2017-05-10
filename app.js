var app = angular.module('bands', []);
app.controller('mainCtrl', function($scope,$http) {
  $scope.bands = [];

  $http({
    method: 'get',
    url: 'https://danilovesovic.github.io/bands/bands.json'
  }).then(function(result) {
    $scope.bands = result.data;
  }, function(error) {
    console.log(error);
  });
});
