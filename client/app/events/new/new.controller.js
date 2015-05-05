'use strict';

angular.module('signmeupApp')
  .controller('NewEventCtrl', function ($scope, Auth, $location, $window) {
      $scope.newEvent = {};
      $scope.errors = {};

      $scope.submit = function(form) {
        $scope.submitted = true;

        if(form && form.$valid) {
          $scope.newEvent = {
            name: $scope.user.name,
            email: $scope.user.email,
            startDate: $scope.startDate,
            endDate: $scope.endDate,
            timeBlockMinutes: $scope.timeBlockMinutes,
            timeBlocks: [],
            info: $scope.info
          }
          $http.post('/api/events/', $scope.newEvent)
          .then( function() {
            // Account created, redirect to events page
            $location.path('/events');
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
        }
      };
    });
