angular.module('Reminisc', [])

.controller('ReminiscCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.isLoggedIn = false;
    $scope.checkLogin = function() {
        $http.get('/api/isLoggedIn').success(function(data) {
           $scope.isLoggedIn = (data == "true");
        });
    }

    $scope.fbLogin = function() {
        $location.path('/api/auth');
    };

}]);
