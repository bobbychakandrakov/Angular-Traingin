(function() {
    'use strict';
    angular.module('ngTraining').controller('AccountController',['$scope','accountService',function ($scope,accountService) {
        $scope.addProfile = addProfile;
        function addProfile(profile) {
            accountService.addAccount(profile);
        }
    }]);
}());
