'use strict';

angular.module('signmeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'app/events/new/new.html',
        controller: 'NewEventCtrl'
      });
  });
