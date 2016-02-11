var React = require('react');

var Search = require('./Search');
var ProductListing = require('./ProductListing');
var Carousel = require('./Carousel');
var Toast = require('./Toast');
var BrowseLocation = require('./BrowseLocation');

var Content = React.createClass({
  render: function () {
    return (
      <div id='Content'>
        Content
        <Search />
        <Carousel />
        <ProductListing />
        <BrowseLocation />
      </div>
    )
  }
});

module.exports = Content;


