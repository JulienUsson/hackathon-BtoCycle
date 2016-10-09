'use strict';

angular.
module('hackathonApp').
  component('news', {
    templateUrl: 'views/components/news.html',
    controller: newsController,
    controllerAs: 'newsCtrl'
  });

function newsController(stubData) {
  var vm = this;

  vm.news = stubData.getNews();

  vm.like = function(index) {
    vm.news[index].liked=!vm.news[index].liked;
  }
}
