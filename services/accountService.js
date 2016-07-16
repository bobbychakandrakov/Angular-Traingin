(function() {
  'use strict';

  angular
    .module('ngTraining')
    .factory('accountService', accountService);

  accountService.$inject = ['$http'];

  function accountService($http){

    var service = {
      addAccount: addAccount
    };

    return service;

    ////////////////////////////

    function addAccount(account){
        // logic to put data in db
        console.log('Account added!');
    }

  }

})();
