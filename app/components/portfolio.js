/** @jsx React.DOM */
'use strict';

var React 	= require('react'),
		Summary = require('./summary')

var Portfolio = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Sua Carteira</h2>
        <Summary />
      </div>
    );
  }
});

module.exports = Portfolio;
