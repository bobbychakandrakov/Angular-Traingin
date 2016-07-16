(function() {
    'use strict';
    angular.module('ngTraining').controller('NavbarController',['$scope','$location',function ($scope,$location) {
        $scope.isActive = isActive;
        function isActive(page) {
            if (page === $location.path()) {
                return true;
            }
            return false;
        }
    }]);
}());
