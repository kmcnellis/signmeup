'use strict';

angular.module('signmeupApp')
  .controller('ReoccurringCtrl', function ($scope, $http) {

   //practicing with this array of times to volunteer on Monday
    var monday = [
      { time: '2:30pm', job: 'dishes'},
      { time: '9:00am', job: 'serving'}
    ];

    $scope.data = monday;

    // $http.get('/api/reoccurring').success(function(data) {
    //   $scope.data = data;
    // });

    //set the originail tab value to 1
    $scope.tab = 1;

    //set the tab with a new value
    $scope.setTab = function(newValue){
      $scope.tab = newValue;
    };

    //checking if tab is set to a value
    $scope.isSet = function(tabValue){
      return $scope.tab == tabValue;
    };
   
  })



