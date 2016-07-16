(function() {
  'use strict';

  angular
    .module('ngTraining')
    .directive('listItem', listItem);

  function listItem(){
    // Usage: ...
    var directive = {
      restrict: 'E',
      templateUrl: 'views/listItem.html',
      scope: {
      },
      link: link
    };
    return directive;

    ////////////////////////////

    function link(scope, element, attrs){
    }

  }

})();
