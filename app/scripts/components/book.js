'use strict';

angular.
module('hackathonApp').
  component('book', {
    templateUrl: 'views/components/book.html',
    controller: bookController,
    controllerAs: 'bookCtrl'
  });

function bookController() {
  var vm = this;

}
