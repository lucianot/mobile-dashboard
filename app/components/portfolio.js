/** @jsx React.DOM */
'use strict';

var React 						= require('react'),
		PortfolioSummary 	= require('./portfolio_summary'),
		PortfolioTable 		= require('./portfolio_table');

var Portfolio = React.createClass({

	loadData: function() {
		// TODO: substitute this for actual data request
		var data = {
			summary: {
				currentValue: 'R$ 700.000,00',
				returnSinceInception: '+6,23%'
			},
			categories: [
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
		    },
		    {
		      name: 'Multimercado',
		      weight: '3,23%',
		      currentValue: 'R$ 300.000,00',
		      returnSinceInception: '+3,34%'
		    },
		    {
		      name: 'Ações',
		      weight: '4,23%',
		      currentValue: 'R$ 400.000,00',
		      returnSinceInception: '+4,34%'
		    }
		  ]
		};

		return data;
	},

	getInitialState: function() {
		return {
			data: {
				summary: {
					currentValue: '',
					returnSinceInception: ''
				},
				categories: []
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
        <PortfolioSummary data={this.state.data.summary} />
        <PortfolioTable data={this.state.data.categories}/>
      </div>
    );
  }
});

module.exports = Portfolio;
