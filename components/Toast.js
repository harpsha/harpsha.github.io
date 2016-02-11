var React = require('react');
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');

var MyComponent = React.createClass({
  _notificationSystem: null,

  _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Product added to cart!',
      level: 'success'
    });
  },

  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

  render: function() {
    return (
      <div>
        <button onClick={this._addNotification}>Add To Cart</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
      );
  }
});

/*ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById('toast')
);*/


module.exports = MyComponent;