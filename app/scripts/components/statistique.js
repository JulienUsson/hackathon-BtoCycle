'use strict';

angular.
module('hackathonApp').
  component('statistique', {
    templateUrl: 'views/components/statistique.html',
    controller: statistiqueController,
    controllerAs: 'statistiqueCtrl'
  });

function statistiqueController(stubData) {
  var vm = this;

  vm.user = stubData.getUser();

  vm.objectif = stubData.getObjectifChart();

  vm.performance = stubData.getPerformanceChart();
}
