'use strict';

angular.module('signmeupApp')
  .controller('ReoccurringCtrl', function ($scope, $http) {

   //practicing with this array of times to volunteer on Monday
    var week = [
      //Monday
      [{ time: '6:30am', job: 'Sort Food into Pantry'},
      { time: '9:00am', job: 'Serving Breakfast'},
      {time: '2:30pm', job: 'Serving Lunch'},
      { time: '7:00pm', job: 'Serving Dinner'}],
      //Tuesday
      [{ time: '7:30am', job: 'Unloading Food into Pantry'},
      { time: '1:00pm', job: 'Serving Lunch'},
      { time: '7:00pm', job: 'Serving Dinner'}],
      //Wednesday
      [{ time: '2:30pm', job: 'Washing Dishes'},
      { time: '4:00pm', job: 'Prepare for Dinner Crowd'},
      { time: '6:00pm', job: 'Serving Dinner'}],
      //Thursday
      [{ time: '2:30pm', job: 'Washing Dishes'},
      { time: '9:00am', job: 'Serving Breakfast'}],
      //Friday
      [{ time: '2:30pm', job: 'Serving Lunch'},
      { time: '6:00pm', job: 'Serving Dinner'},
      { time: '6:30pm', job: 'Washing Dishes'}],
      //Saturday
      [{ time: '9:30am', job: 'Washing Dishes'},
      { time: '2:00pm', job: 'Washing Dishes'}],
      //Sunday
      [{ time: '8:30am', job: 'Washing Dishes'},
      { time: '9:00am', job: 'Serving Breakfast'},
      { time: '2:30pm', job: 'Washing Dishes'},
      { time: '6:00pm', job: 'Serving Dinner'}],

    ];

    $scope.data = week;

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



