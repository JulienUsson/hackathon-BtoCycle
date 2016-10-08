'use strict';

angular.
module('hackathonApp').
  component('book', {
    templateUrl: 'views/components/book.html',
    controller: bookController,
    controllerAs: 'bookCtrl'
  });

function bookController($mdToast) {
  var vm = this;
  vm.validated = false;
  vm.minDate = new Date();

  vm.reservations = [];
  var tmpDate = new Date();

  vm.reservations.push({date: new Date(2016, 08, 16), time: new Date(2016, 08, 16, 10, 10)})

  vm.book = function() {
    vm.validated = true;
    if(vm.date !== undefined && vm.time !== undefined) {
      vm.reservations.push({date: vm.date, time: vm.time})
      $mdToast.show(
        $mdToast.simple()
          .textContent('Réservation effectuée !')
          .hideDelay(3000)
      );
    }
  }

  vm.cancel = function() {

  }

  vm.removeReservation = function(index) {
    vm.reservations.splice(index, 1);
  }

}
