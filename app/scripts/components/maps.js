  'use strict';

angular.
  module('hackathonApp').
    component('maps', {
      templateUrl: 'views/components/maps.html',
      controller: mapsController,
      controllerAs: 'mapsCtrl'
    });

function mapsController($mdDialog, stubData) {
  var vm = this;

  //sopra location
  vm.map = stubData.getMapInit();
  vm.map.options = {'disableDefaultUI': true};

  vm.markers= stubData.getMarkers();

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
    if(item !== undefined) {
      vm.map.center = {'latitude': item.coords.latitude, 'longitude': item.coords.longitude};
    }
  }
}
