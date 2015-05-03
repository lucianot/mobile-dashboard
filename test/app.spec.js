// 'use strict';

var React 		= require('react'),
		TestUtils = require('react/lib/ReactTestUtils'),
		App 			= require('../app/app'),
		instance;

describe("App", function() {
  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<App title="Hello World!" />);
  });

  it("should render a heading with the given text", function() {
    var heading = TestUtils.findRenderedDOMComponentWithTag(instance, "h1");
    expect(heading.getDOMNode().textContent).to.equal("Hello World!");
  });
});
