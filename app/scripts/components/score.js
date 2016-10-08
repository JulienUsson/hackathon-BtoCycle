'use strict';

angular.
module('hackathonApp').
  component('score', {
    templateUrl: 'views/components/score.html',
    controller: scoreController,
    controllerAs: 'scoreCtrl'
  });

function scoreController() {
  var vm = this;

  vm.username = 'Mathilde Dupont';
  vm.company = 'Sopra Steria';
  vm.avatar = 'images/components/score/avatar.png';

  vm.todayKms = 0.5;
  vm.kms = 5.5;
}
