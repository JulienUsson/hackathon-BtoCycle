  'use strict';

angular.
  module('hackathonApp').
    component('maps', {
      templateUrl: 'views/components/maps.html',
      controller: mapsController,
      controllerAs: 'mapsCtrl'
    });

function mapsController($mdDialog) {
  var vm = this;

  //sopra location
  vm.center = { latitude: 45.760351, longitude: 3.134832 };
  vm.zoom = 18

  vm.markers= [];
  vm.markers.push(createMarker(1, "sopra", 45.760351, 3.134832, 4, 5));
  vm.markers.push(createMarker(1, "test", 45.760328, 3.135598, 0, 5));

  vm.showAlert = function(event, marker) {
    vm.selectedMarker = marker;
    $mdDialog.show({
      controller: MapsModalController,
      templateUrl: 'views/components/modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true
    })
  }

  function createMarker(id, title, latitude, longitude, available, nbPlaces) {
    var icon = 'images/components/maps/';
    icon += (available > 0)?'green_':'red_';
    icon += (available == nbPlaces)?'red':'green';
    icon += '.png';

    return {
      'id': id,
      'title': title,
      'available': available,
      'nbPlaces': nbPlaces,
      'coords': { 'latitude': latitude, 'longitude': longitude },
      'options': {
        'icon': icon
      }
    };
  }

  function MapsModalController($scope, $mdDialog) {
    $scope.marker=vm.selectedMarker;

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  vm.querySearch = function() {
    return vm.markers.filter(function(marker) {
      return marker.title.toLowerCase().startsWith(vm.searchText.toLowerCase());
    });
  }

  vm.selectedItemChange = function(item) {
    vm.center = {'latitude': item.coords.latitude, 'longitude': item.coords.longitude};
  }
}
