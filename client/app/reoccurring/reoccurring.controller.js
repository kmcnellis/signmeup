'use strict';

angular.module('signmeupApp')
  .controller('ReoccurringCtrl', function ($scope, $http) {
    $scope.data = [];

    $http.get('/app/reoccurring').success(function(data) {
      $scope.data = data;
    });
  })

  .controller('TabController', function($scope){
    $scope.tab = 1;

    $scope.setTab = function(newValue){
      $scope.tab = newValue;
    };

    $scope.isSet = function(tabName){
      return $scope.tab == tabName;

    };
  })


var monday = [
  { time: '2:30pm', job: 'dishes'},
  { time: '9:00am', job: 'serving'}
];
