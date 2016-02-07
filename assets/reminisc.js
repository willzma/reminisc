angular.module('Reminisc', ['wu.masonry'])

.controller('ReminiscCtrl', ['$scope', '$http', '$location',  function($scope, $http, $location) {

    $scope.isLoggedIn = false;
    $scope.imgs = null;
    $scope.loadComplete = false;
    $scope.showResults = false;

    $scope.fbLogin = function() {
        $location.path('/api/auth');
    };

    $scope.loadData = function() {
        $http.get('/api/getPictures').success(function(data) {
            $scope.imgs = (data == "null") ? null : data;
            $scope.loadComplete = true;
        });
    }

    $scope.checkLogin = function() {
        $http.get('/api/isLoggedIn').success(function(data) {
           $scope.isLoggedIn = (data == "true");
           if ($scope.isLoggedIn) $scope.loadData();
        });
    }

    $scope.startSearch = function() {
        $scope.showResults = true;
    }

}]);
