'use strict';

var React 		= require('react'),
		TestUtils = require('react/lib/ReactTestUtils'),
		Summary	  = require('../../app/components/summary'),
		instance;

describe("Summary", function() {
  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Summary />);
  });

  it("should render the heading", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'current-value__title');
    expect(heading.getDOMNode().textContent).to.equal('Valor atual');
  });
});
