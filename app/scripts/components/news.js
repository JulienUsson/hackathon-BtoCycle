'use strict';

angular.
module('hackathonApp').
  component('news', {
    templateUrl: 'views/components/news.html',
    controller: newsController,
    controllerAs: 'newsCtrl'
  });

function newsController() {
  var vm = this;
}
