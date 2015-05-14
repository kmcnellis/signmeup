'use strict';

angular.module('signmeupApp')
  .controller('ReoccurringCtrl', function ($scope, $http, $window) {

    //cart variable
    var ca = [ ];
    $scope.cart = ca;

   //practicing with this array of times to volunteer on Monday
    var week = [
      //Monday
      [{ day: 'Monday', time: '6:30am', job: 'Sort Food into Pantry', isOpen: true},
      { day: 'Monday', time: '9:00am', job: 'Serving Breakfast', isOpen: true},
      { day: 'Monday', time: '2:30pm', job: 'Serving Lunch', isOpen: false},
      { day: 'Monday', time: '7:00pm', job: 'Serving Dinner', isOpen: true}],
      //Tuesday
      [{ day: 'Tuesday', time: '7:30am', job: 'Unloading Food into Pantry', isOpen: false},
      { day: 'Tuesday',  time: '1:00pm', job: 'Serving Lunch', isOpen: true},
      { day: 'Tuesday',  time: '7:00pm', job: 'Serving Dinner', isOpen: true}],
      //Wednesday
      [{ day: 'Wednesday', time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { day: 'Wednesday',  time: '4:00pm', job: 'Prepare for Dinner Crowd', isOpen: true},
      { day: 'Wednesday',  time: '6:00pm', job: 'Serving Dinner', isOpen: true}],
      //Thursday
      [{ day: 'Thursday',  time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { day: 'Thursday',  time: '9:00am', job: 'Serving Breakfast', isOpen: true}],
      //Friday
      [{ day: 'Friday',  time: '2:30pm', job: 'Serving Lunch', isOpen: true},
      { day: 'Friday', time: '6:00pm', job: 'Serving Dinner', isOpen: true},
      { day: 'Friday', time: '6:30pm', job: 'Washing Dishes', isOpen: true}],
      //Saturday
      [{ day: 'Satday', time: '9:30am', job: 'Washing Dishes', isOpen: true},
      { day: 'Satday', time: '2:00pm', job: 'Washing Dishes', isOpen: true}],
      //Sunday
      [{ day: 'Sunday', time: '8:30am', job: 'Washing Dishes', isOpen: true},
      { day: 'Sunday',  time: '9:00am', job: 'Serving Breakfast', isOpen: true},
      { day: 'Sunday',  time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { day: 'Sunday',  time: '6:00pm', job: 'Serving Dinner', isOpen: true}],

    ];

    $scope.data = week;

    //set the original tab value to 1
    $scope.tab = 1;

    ////////////****Functions****///////////////////////

    //set the tab with a new value
    $scope.setTab = function(newValue){
      $scope.tab = newValue;
    };

    //checking if tab is set to a value
    $scope.isSet = function(tabValue){
      return $scope.tab == tabValue;
    };

    //change isOpen to false and 
    //add the info of the volunteer time to the cart
    $scope.changeOpen = function(day){
      //add this volunteer time to the cart (day of week, time and job)
      $scope.cart.push([day.day, day.time, day.job]);

      //print the volunteer times in the cart
      //***working on printing the screen to the cart
      alert($scope.cart.join("\n "));

      //change isOpen to false (to take it off of the available list)
      return day.isOpen = false;
    };
   
  })



