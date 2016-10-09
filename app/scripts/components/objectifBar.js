'use strict';

angular.
module('hackathonApp').
  component('objectifBar', {
    templateUrl: 'views/components/objectifBar.html',
    controller: barController,
    controllerAs: 'barCtrl',
    bindings: {
      'value': '='
    }
  });

function barController($interval) {
  var vm = this;
  vm.actualValue = 0;


  $interval(function() {
    if(vm.actualValue < vm.value) {
      vm.actualValue += 1;
    }
  }, 100, 0, true);
}
