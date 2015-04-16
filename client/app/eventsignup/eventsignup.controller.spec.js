'use strict';

describe('Controller: EventsignupCtrl', function () {

  // load the controller's module
  beforeEach(module('signmeupApp'));

  var EventsignupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsignupCtrl = $controller('EventsignupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
