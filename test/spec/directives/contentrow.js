'use strict';

describe('Directive: contentRow', function () {

  // load the directive's module
  beforeEach(module('dreaPortfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content-row></content-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the contentRow directive');
  }));
});
