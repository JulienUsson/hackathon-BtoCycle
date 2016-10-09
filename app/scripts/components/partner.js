'use strict';

angular.
module('hackathonApp').
  component('partner', {
    templateUrl: 'views/components/partner.html',
    controller: partnerController,
    controllerAs: 'partnerCtrl'
  });

function partnerController(stubData) {
  var vm = this;

  vm.partners=stubData.getPartners();
}
