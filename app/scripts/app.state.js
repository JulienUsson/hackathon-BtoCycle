angular.module('hackathonApp').config(function($urlRouterProvider, $stateProvider) {

  var splashScreenState = {
    name: 'splashScreen',
    url: '/',
    views: {
      'header': {
        template: ''
      },
      'container': {
        template: '<splash-screen></splash-screen>'
      }
    }
  }

  var homeState = {
    name: 'home',
    url: '/home',
    views: {
      'header': {
        template: '<app-menu></app-menu>'
      },
      'container': {
        template: '<home></home>'
      }
    }
  }

  var mapsState = {
    name: 'maps',
    url: '/maps',
    views: {
      'header': {
        template: '<app-menu></app-menu>'
      },
      'container': {
        template: '<maps></maps>'
      }
    }
  }

  var scoreState = {
    name: 'score',
    url: '/score',
    views: {
      'header': {
        template: '<app-menu></app-menu>'
      },
      'container': {
        template: '<score></score>'
      }
    }
  }

  var unlockState = {
    name: 'unlock',
    url: '/unlock',
    views: {
      'header': {
        template: '<app-menu></app-menu>'
      },
      'container': {
        template: '<unlock></unlock>'
      }
    }
  }

  var bookState = {
    name: 'book',
    url: '/book',
    views: {
      'header': {
        template: '<app-menu></app-menu>'
      },
      'container': {
        template: '<book></book>'
      }
    }
  }

  $stateProvider.state(splashScreenState);
  $stateProvider.state(homeState);
  $stateProvider.state(mapsState);
  $stateProvider.state(scoreState);
  $stateProvider.state(unlockState);
  $stateProvider.state(bookState);
  $urlRouterProvider.otherwise('/');
});
