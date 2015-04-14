'use strict';

describe('Controller: ReoccurringCtrl', function () {

  // load the controller's module
  beforeEach(module('signmeupApp'));

  var ReoccurringCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReoccurringCtrl = $controller('ReoccurringCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
