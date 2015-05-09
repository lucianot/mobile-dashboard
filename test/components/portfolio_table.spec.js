'use strict';

var React 		      = require('react'),
		TestUtils       = require('react/lib/ReactTestUtils'),
		PortfolioTable  = require('../../app/components/portfolio_table'),
    Category        = require('../../app/components/category'),
		instance;

describe("PortfolioTable", function() {
  beforeEach(function() {
    var data = [
      {
        name: 'Curto Prazo',
        weight: '1,23%',
        currentValue: 'R$ 100.000,00',
        returnSinceInception: '+1,34%'
      },
      {
        name: 'Renda Fixa',
        weight: '2,23%',
        currentValue: 'R$ 200.000,00',
        returnSinceInception: '+2,34%'
      }
    ];
    instance = TestUtils.renderIntoDocument(<PortfolioTable data={data} />);
  });

  it("should render the heading", function() {
    var heading = TestUtils.findRenderedDOMComponentWithClass(instance, 'table__title');
    expect(heading.getDOMNode().textContent).to.equal('Categorias');
  });

  it("should render all the categories", function() {
    var categories = TestUtils.scryRenderedComponentsWithType(instance, Category);
    expect(categories.length).to.equal(2);
  });

  it("should render the category with the given data", function() {
    var categories = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'category__name');
    expect(categories[0].getDOMNode().textContent).to.equal('Curto Prazo');
  });
});
