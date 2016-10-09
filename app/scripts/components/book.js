'use strict';

function bookController($mdToast, stubData) {
  var vm = this;
  vm.validated = false;
  vm.minDate = new Date();

  vm.reservations = stubData.getReservations();
  vm.stations = stubData.getMarkers();

  vm.book = function() {
    vm.validated = true;
    if(vm.date !== undefined && vm.time !== undefined) {
      vm.reservations.push({date: vm.date, time: vm.time, station: vm.station.title});
      $mdToast.show(
        $mdToast.simple()
          .textContent('Réservation effectuée !')
          .hideDelay(500)
      );
    }
  };

  vm.cancel = function() {

  };

  vm.removeReservation = function(index) {
    vm.reservations.splice(index, 1);
  };

}

angular.
module('hackathonApp').
  component('book', {
    templateUrl: 'views/components/book.html',
    controller: bookController,
    controllerAs: 'bookCtrl'
  });
