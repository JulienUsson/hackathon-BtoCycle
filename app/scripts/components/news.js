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

  vm.news = [
    {'title': 'titre', 'content': 'contenu', 'liked': false},
    {'title': 'titre', 'content': 'contenu', 'liked': true},
    {'title': 'titre', 'content': 'contenu', 'liked': false}
  ]

  vm.like = function(index) {
    vm.news[index].liked=!vm.news[index].liked;
  }
}
