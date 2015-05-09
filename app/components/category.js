'use strict';

var React = require('react');

var Category = React.createClass({
  render: function() {
    return (
      <section className='category'>
        <div className='category__name'>{this.props.data.name}</div>
        <div className='category__weight'>{this.props.data.weight}</div>
        <div className='category__value'>{this.props.data.currentValue}</div>
        <div className='category__return'>{this.props.data.returnSinceInception}</div>
      </section>
    );
  }
});

module.exports = Category;
