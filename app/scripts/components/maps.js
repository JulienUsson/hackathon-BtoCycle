  'use strict';

angular.
  module('hackathonApp').
    component('maps', {
      templateUrl: 'views/components/maps.html',
      controller: mapsController,
      controllerAs: 'mapsCtrl'
    });

function mapsController() {
  var vm = this;

  //sopra location
  vm.center = { latitude: 45.760351, longitude: 3.134832 };
  vm.zoom = 18;

  vm.markers= [];
  vm.markers.push(createMarker(1, 45.760351, 3.134832, true));
  vm.markers.push(createMarker(1, 45.760328, 3.135598, false));

  function createMarker(id, latitude, longitude, available) {
    return {
      'id': id,
      'coords': { 'latitude': latitude, 'longitude': longitude },
      'options': {
        'icon': (available)?'/images/components/maps/green_cycle.png':'/images/components/maps/red_parking.png'
      }
    };
  }
}
