'use strict';

var React 		= require('react'),
		TestUtils = require('react/lib/ReactTestUtils'),
    Category  = require('../../app/components/category'),
		instance;

describe("Category", function() {
  beforeEach(function() {
    this.categoryData = {
      name: 'Curto Prazo',
      weight: '9,87%',
      currentValue: 'R$ 50.000,00',
      returnSinceInception: '+2,00%'
    };

    instance = TestUtils.renderIntoDocument(<Category data={this.categoryData} />);
  });

  it("should render the category name with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'category__name');
    expect(heading.getDOMNode().textContent).to.equal(this.categoryData.name);
  });

  it("should render the category weight with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'category__weight');
    expect(heading.getDOMNode().textContent).to.equal(this.categoryData.weight);
  });

  it("should render the current value with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'category__value');
    expect(heading.getDOMNode().textContent).to.equal(this.categoryData.currentValue);
  });

  it("should render the return with the given data", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'category__return');
    expect(heading.getDOMNode().textContent).to.equal(this.categoryData.returnSinceInception);
  });
});
