'use strict';

angular.
module('hackathonApp').
  component('splashScreen', {
    templateUrl: 'views/components/splashScreen.html',
    controller: spController,
    controllerAs: 'spCtrl'
  });

function spController($state, $timeout) {
  var vm = this;
  $timeout(function() {
    $state.go('home');
  }, 1000);
}
