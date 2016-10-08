'use strict';

/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'uiGmapgoogle-maps',
    'ngMaterial',
    'ui.router'
  ]);

angular.module('hackathonApp').config(
  ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
      GoogleMapApiProviders.configure({
          france: true
      });
  }]
);

angular.module('hackathonApp').config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('yellow');
});
