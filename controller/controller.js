angular.module('controller', [])
       .controller('mainCtrl', function($scope, db) {
         $scope.bands = [];
         $scope.activeBand = {};
         db.getData().then(function(result) {
           $scope.bands = result.data;
         }, function(error) {
           console.log(error);
         });
         $scope.display = function(band) {
             $scope.activeBand = band;
         }
       })
