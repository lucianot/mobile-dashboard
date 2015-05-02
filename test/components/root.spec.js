var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Root = require('../../app/components/root');
var expect = require('expect');

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });
});
