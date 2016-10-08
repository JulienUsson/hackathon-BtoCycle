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

  vm.objectif = [];
  vm.objectif.labels = ["Objectif à ateindre", "Objectif"];
  vm.objectif.data = [10, 90];
  vm.objectif.colors = ['#388e3c', '#bdc3c7'];

  vm.performance = [];
  vm.performance.labels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  vm.performance.series = ['Mes performances', 'Performances moyennes'];
  vm.performance.data = [
    [0.3, 0.5, 0.7, 0.2, 0.1, 0, 0],
    [0.5, 0.7, 0.9, 0.7, 0.6, 0.5, 0.4]
  ];
}
