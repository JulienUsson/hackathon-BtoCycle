'use strict';

angular.
module('hackathonApp').
  component('classement', {
    templateUrl: 'views/components/classement.html',
    controller: classementController,
    controllerAs: 'classementCtrl'
  });

function classementController() {
  var vm = this;
}
