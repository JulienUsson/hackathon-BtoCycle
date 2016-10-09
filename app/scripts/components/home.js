'use strict';

angular.
module('hackathonApp').
  component('home', {
    templateUrl: 'views/components/home.html',
    controller: homeController,
    controllerAs: 'homeCtrl'
  });

function homeController() {
  var vm = this;
  vm.username = 'Mathilde Dupont';
  vm.company = 'Sopra Steria';
  vm.avatar = 'images/components/score/avatar.png';
  vm.kms = 5.5;



}
