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

  vm.actualUser = 8;

  vm.users = [];
  for (var i = 0; i < 200; i++) {
    if(i == 8) {
     this.users.push({name: "Mathilde Dupont", index: i, score: 1000 - i*33});
    } else {
     this.users.push({name: "John Do", index: i, score: 1000 - i*33});
    }
  }


  if(vm.actualUser > 2) {
    vm.topIndex = vm.actualUser-2;
  } else {
    vm.topIndex = vm.actualUser;
  }

}
