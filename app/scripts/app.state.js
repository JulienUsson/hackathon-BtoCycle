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

  $stateProvider.state(homeState);
  $stateProvider.state(mapsState);
  $stateProvider.state(scoreState);
  $urlRouterProvider.otherwise('/');
});
