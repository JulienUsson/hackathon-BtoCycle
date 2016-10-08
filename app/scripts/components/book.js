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

  vm.reservations = [];
  vm.reservations.push({date: '09/10/2016', time: '10:00'})

  vm.book = function() {
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
