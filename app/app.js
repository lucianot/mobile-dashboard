/** @jsx React.DOM */
'use strict';

var React 		= require('react'),
		Portfolio = require('./components/portfolio');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
	      <Portfolio />
      </div>
    );
  }
});

module.exports = App;
