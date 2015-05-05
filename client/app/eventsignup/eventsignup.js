'use strict';

angular.module('signmeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsignup', {
        url: '/eventsignup',
        templateUrl: 'app/eventsignup/eventsignup.html',
        controller: 'EventsignupCtrl'
      });
  });

  