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
    'ngTouch',
    'uiGmapgoogle-maps'
  ]);

angular.module('hackathonApp').config(
  ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
      GoogleMapApiProviders.configure({
          france: true
      });
  }]
);
