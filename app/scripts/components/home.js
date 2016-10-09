'use strict';

angular.
module('hackathonApp').
  component('home', {
    templateUrl: 'views/components/home.html',
    controller: homeController,
    controllerAs: 'homeCtrl'
  });

function homeController(stubData) {
  var vm = this;
  vm.user = stubData.getUser();

}
