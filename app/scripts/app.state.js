angular.module('hackathonApp').config(function($urlRouterProvider, $stateProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    template: '<home></home>'
  }

  var mapsState = {
    name: 'maps',
    url: '/maps',
    template: '<maps></maps>'
  }

  var scoreState = {
    name: 'score',
    url: '/score',
    template: '<score></score>'
  }

  var unlockState = {
    name: 'unlock',
    url: '/unlock',
    template: '<unlock></unlock>'
  }

  var bookState = {
    name: 'book',
    url: '/book',
    template: '<book></book>'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(mapsState);
  $stateProvider.state(scoreState);
  $stateProvider.state(unlockState);
  $stateProvider.state(bookState);
  $urlRouterProvider.otherwise('/');
});
