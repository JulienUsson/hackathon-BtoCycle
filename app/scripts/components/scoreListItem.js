'use strict';

angular.
module('hackathonApp').
  component('scoreListItem', {
    templateUrl: 'views/components/scoreListItem.html',
    controller: scoreLineController,
    controllerAs: 'scoreLineCtrl',
    bindings: {
      'img': '=',
      'label': '=',
      'score': '=',
      'unit': '='
    }
  });

function scoreLineController() {
  var vm = this;
}
