'use strict';

angular.module('signmeupApp')
  .controller('EventsCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/events/').success(function(events){
        $scope.events = events;
      });
    });
