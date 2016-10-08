angular.module('hackathonApp').config(function($urlRouterProvider, $stateProvider) {

  var splashScreenState = {
    name: 'splashScreen',
    url: '/',
    template: '<splash-screen></splash-screen>'
  }

  var homeState = {
    name: 'home',
    url: '/home',
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

  $stateProvider.state(splashScreenState);
  $stateProvider.state(homeState);
  $stateProvider.state(mapsState);
  $stateProvider.state(scoreState);
  $stateProvider.state(unlockState);
  $stateProvider.state(bookState);
  $urlRouterProvider.otherwise('/');
});
