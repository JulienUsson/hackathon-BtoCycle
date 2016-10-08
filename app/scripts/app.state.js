angular.module('hackathonApp').config(function($urlRouterProvider, $stateProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    template: '<div>coucou</div>'
  }

  var mapsState = {
    name: 'maps',
    url: '/maps',
    template: '<maps></maps>'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(mapsState);
  $urlRouterProvider.otherwise('/');
});
