'use strict';

angular.
module('hackathonApp').
  component('appMenu', {
    templateUrl: 'views/components/menu.html',
    controller: menuController,
    controllerAs: 'menuCtrl'
  });

function menuController($state) {
  var vm = this;

  vm.return = function() {
    $state.go('home');
  }

  console.log($state.current);
}
