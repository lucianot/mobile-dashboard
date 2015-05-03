/** @jsx React.DOM */
'use strict';

var React = require('react');

var Summary = React.createClass({
  render: function() {
    return (
      <div>
      	<div className='current-value'>
        	<p className='current-value__title'>Valor atual</p>
        	<p className='current-value__value'>{ this.props.data.currentValue }</p>
        </div>
        <div className='return'>
        	<p className='return__title'>Retorno desde o início</p>
        	<p className='return__value'>{ this.props.data.returnSinceInception }</p>
        </div>
      </div>
    );
  }
});

module.exports = Summary;
