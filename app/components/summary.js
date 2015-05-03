/** @jsx React.DOM */
'use strict';

var React = require('react');

var Summary = React.createClass({
  render: function() {
    return (
      <div>
      	<div className='current-value'>
        	<p className='current-value__title'>Valor atual</p>
        	<p className='current-value__value'>R$ 1.000.000,00</p>
        </div>
        <div className='return'>
        	<p className='return__title'>Retorno desde o início</p>
        	<p className='re'>+0,16%</p>
        </div>
      </div>
    );
  }
});

module.exports = Summary;
