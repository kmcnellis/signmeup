'use strict';

(function(){
	var calendar = { month: 'March', day: 10, startTime: 3, endTime: 9, pm: true, job: 'Dishes', isOpen: true};
    var app = angular.module('fullCalendar', []);

    app.controller('CalendarController', function(){
    	this.product = calendar;
  	});

})();