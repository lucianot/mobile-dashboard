var React 		= require('react'),
		TestUtils = require('react/lib/ReactTestUtils'),
		App 			= require('../app/app'),
		expect 		= require('expect');

describe('App', function() {
  it('boots app', function() {
    var app = TestUtils.renderIntoDocument(<App />);
    expect(app).toExist();
  });
});
