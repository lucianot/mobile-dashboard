'use strict';

var React 		= require('react'),
		TestUtils = require('react/lib/ReactTestUtils'),
		Portfolio	= require('../../app/components/portfolio'),
		instance;

describe("Portfolio", function() {
  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Portfolio />);
  });

  it("should render the heading", function() {
    var heading = TestUtils.findRenderedDOMComponentWithTag(instance, "h2");
    expect(heading.getDOMNode().textContent).to.equal("Sua Carteira");
  });
});
