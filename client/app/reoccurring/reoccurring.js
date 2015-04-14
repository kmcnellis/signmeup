'use strict';

angular.module('signmeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reoccurring', {
        url: '/reoccurring',
        templateUrl: 'app/reoccurring/reoccurring.html',
        controller: 'ReoccurringCtrl',
      });
});



 