/** @jsx React.DOM */
'use strict';

var React     = require('react'),
    Category  = require('./category');

var PortfolioTable = React.createClass({

  categoryNodes: function() {
    var nodes = this.props.data.map(function (category) {
      return (
        <Category data={ category } />
      );
    });

    return nodes;
  },

  render: function() {
    return (
      <div>
        <h3 className='table__title'>Categorias</h3>
        <article>
          { this.categoryNodes() }
        </article>
      </div>
    );
  }
});

module.exports = PortfolioTable;
