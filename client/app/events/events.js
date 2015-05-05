'use strict';

angular.module('signmeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl'
      });
    $stateProvider
      .state('newEvents', {
        url: '/events/new',
        templateUrl: 'app/events/new/new.html',
        controller: 'EventsCtrl'
      });
  });
