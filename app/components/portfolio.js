/** @jsx React.DOM */
'use strict';

var React 	= require('react'),
		PortfolioSummary = require('./portfolio_summary');

var Portfolio = React.createClass({

	loadData: function() {
		// TODO: substitute this for actual data request
		var data = {
			currentValue: 'R$ 700.000,00',
			returnSinceInception: '+6,23%'
		};

		return data;
	},

	getInitialState: function() {
		return {
			data: {
				currentValue: '',
				returnSinceInception: ''
			}
		}
	},

	componentDidMount: function() {
		var data = this.loadData();

		this.setState({data: data});
	},

  render: function() {
    return (
      <div>
        <h2>Sua Carteira</h2>
        <PortfolioSummary data={this.state.data} />
      </div>
    );
  }
});

module.exports = Portfolio;
