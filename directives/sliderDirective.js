(function() {
  'use strict';

  angular
    .module('ngTraining')
    .directive('mySlider', slider);

  function slider(){
      
    var directive = {
      restrict: 'E',
      templateUrl: 'views/slider.html',
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
