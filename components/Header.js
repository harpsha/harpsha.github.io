var React = require('react');
var ReactDOM = require('react-dom');
var Whatsapp = require('./Whatsapp');
var Auth = require('./Auth');
var Logo = require('./Logo');
var Cart = require('./Cart');

var Header = React.createClass({
  render: function () {
    return (
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".top-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Appeti</a>
            </div>
            <div className="navbar-collapse collapse top-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="../navbar/">Default</a></li>
                <li className="active"><a href="./">Static top</a></li>
                <li><a href="../navbar-fixed-top/">Fixed top</a></li>
              </ul>
            </div>
          </div>

        <Whatsapp />


      </div>
    )
  }
});

module.exports = Header;

ReactDOM.render(
  <Header />,
  document.getElementById('Header')
);

/*
        <Auth />
        <Logo />
        <Cart />
*/

