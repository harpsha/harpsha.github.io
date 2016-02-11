var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Content = require('./Content');
var Footer = require('./Footer');
var Sticky = require('react-stickynode');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        <Sticky top='#Header' bottomBoundary='#main-container'>
        <Header />
        </Sticky>
        <Content />
        <Footer />
      </div>
    )
  }
});
//top={50} bottomBoundary={1200}
module.exports = App;

//ReactDOM.render(<App />, document.getElementById('main-container'));
