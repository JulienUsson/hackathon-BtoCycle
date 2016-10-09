'use strict';

angular.
module('hackathonApp').
  component('partner', {
    templateUrl: 'views/components/partner.html',
    controller: partnerController,
    controllerAs: 'partnerCtrl'
  });

function partnerController() {
  var vm = this;

  vm.partners=[
    {'title': 'EUM', 'subTitle': 'École Universitaire de Management', 'imageSrc': 'images/components/partner/EUM.png'},
    {'title': 'ISIMA', 'subTitle': 'Institut Supérieur d\'Informatique, de Modélisation et de leurs Applications', 'imageSrc': 'images/components/partner/ISIMA.png'},
    {'title': 'SMTC', 'subTitle': '', 'imageSrc': 'images/components/partner/SMTC.png'},
    {'title': 'Ville de Clermont-Ferrand', 'subTitle': '', 'imageSrc': 'images/components/partner/Ville_Clermont.jpg'}
  ];
}
