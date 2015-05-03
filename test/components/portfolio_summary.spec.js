'use strict';

var React 		        = require('react'),
		TestUtils         = require('react/lib/ReactTestUtils'),
		PortfolioSummary  = require('../../app/components/portfolio_summary'),
		instance;

describe("PortfolioSummary", function() {
  beforeEach(function() {
    var data = {
      currentValue: "R$ 100.000,00",
      returnSinceInception: "+1,00%"
    };
    instance = TestUtils.renderIntoDocument(<PortfolioSummary data={data} />);
  });

  it("should render the heading", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'current-value__title');
    expect(heading.getDOMNode().textContent).to.equal('Valor atual');
  });

  it("should render the current value with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'current-value__value');
    expect(heading.getDOMNode().textContent).to.equal('R$ 100.000,00');
  });

  it("should render the return with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'return__value');
    expect(heading.getDOMNode().textContent).to.equal('+1,00%');
  });
});
