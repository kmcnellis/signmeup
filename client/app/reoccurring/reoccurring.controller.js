'use strict';

angular.module('signmeupApp')
  .controller('ReoccurringCtrl', function ($scope, $http, $window) {

    //cart variable
    var ca = [ ];
    $scope.cart = ca;

   //practicing with this array of times to volunteer on Monday
    var week = [
      //Monday
      [{ time: '6:30am', job: 'Sort Food into Pantry', isOpen: true},
      { time: '9:00am', job: 'Serving Breakfast', isOpen: true},
      {time: '2:30pm', job: 'Serving Lunch', isOpen: false},
      { time: '7:00pm', job: 'Serving Dinner', isOpen: true}],
      //Tuesday
      [{ time: '7:30am', job: 'Unloading Food into Pantry', isOpen: false},
      { time: '1:00pm', job: 'Serving Lunch', isOpen: true},
      { time: '7:00pm', job: 'Serving Dinner', isOpen: true}],
      //Wednesday
      [{ time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { time: '4:00pm', job: 'Prepare for Dinner Crowd', isOpen: true},
      { time: '6:00pm', job: 'Serving Dinner', isOpen: true}],
      //Thursday
      [{ time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { time: '9:00am', job: 'Serving Breakfast', isOpen: true}],
      //Friday
      [{ time: '2:30pm', job: 'Serving Lunch', isOpen: true},
      { time: '6:00pm', job: 'Serving Dinner', isOpen: true},
      { time: '6:30pm', job: 'Washing Dishes', isOpen: true}],
      //Saturday
      [{ time: '9:30am', job: 'Washing Dishes', isOpen: true},
      { time: '2:00pm', job: 'Washing Dishes', isOpen: true}],
      //Sunday
      [{ time: '8:30am', job: 'Washing Dishes', isOpen: true},
      { time: '9:00am', job: 'Serving Breakfast', isOpen: true},
      { time: '2:30pm', job: 'Washing Dishes', isOpen: true},
      { time: '6:00pm', job: 'Serving Dinner', isOpen: true}],

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
      //add this volunteer time to the cart
      $scope.cart.push([day.time, day.job, day.isOpen]);

      //print the volunteer times in the cart
      //***working on printing the screen to the cart
      //$window.alert(cart.join("\n"));

      //change isOpen to false (to take it off of the available list)
      return day.isOpen = false;
    };
   
  })



