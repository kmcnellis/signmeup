'use strict';

angular.module('signmeupApp')
  .controller('EventsignupCtrl', function ($scope, $compile, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    //customized
    $scope.events = [
		{title: 'All Day Event',start: new Date(y, m, 3)}, //all day event
		{title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
		{title: 'Kitchen help',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false}
	];
    //event source pulled from Google.com
    $scope.eventSource = {
    	url:"http://www.google.com/calendar/feeds/usa_en%40holiday.calendar.google.com/public/basic",
    	className:'gcal-event',
    	currentTimezone:'America/Chicago'
    };
     /* event source that calls a function on every view switch */
	$scope.eventsF = function (start, end, timezone, callback) {
		var s = new Date(start).getTime() / 1000;
		var e = new Date(end).getTime() / 1000;
		var m = new Date(start).getMonth();
		var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
		callback(events);
	};
    $scope.alertOnEventClick = function(date, jsEvent, view){
    	$scope.alertMessage = (date.title +' was clicked ');
    };
    $scope.changeView = function(view,calendar) {
		uiCalendarConfig.calendar.fullCalendar('changeView',view);
	};
	$scope.renderCalender = function(calendar) {
		if(uiCalendarConfig.calendar){
			uiCalendarConfig.calendar.fullCalendar('render');
		}
	};

	 $scope.uiConfig = {
		calendar:{
			height: 450,
			editable: true,
			header:{
			left: 'title',
			center: '',
			right: 'today prev,next'
			},
		eventClick: $scope.alertOnEventClick,

		}
	};
	 $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];

  });
