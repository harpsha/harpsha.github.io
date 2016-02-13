var React = require('react');
var ReactDOM = require('react-dom');
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
              <a className="navbar-brand" href="#"><div></div></a>
            </div>
            <div className="navbar-collapse collapse top-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Shop <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Location</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Category</li>
                      <li className="divider"></li>                    
                      <li><a href="/shop/category/90901/sweets">Sweets</a></li>
                      <li><a href="/shop/category/90902/snacks">Snacks</a></li>
                      <li><a href="/shop/category/90907/bakery">Bakery</a></li>
                      <li><a href="/shop/category/90910/chocolates">Chocolates</a></li>
                      <li><a href="/shop/category/90911/health">Health Food</a></li>
                      <li><a href="/shop/category/90909/combos">Combos</a></li>
                      <li><a href="/shop/category/90907/bakery">Bakery</a></li>
                      <li><a href="/shop/category/90905/beverage">Beverages</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="https://play.google.com/store/apps/details?id=ds.com.appeti">APP</a></li>
                <li ><a href="/cart">Cart</a></li>
                
                <li className="dropdown">
                     <a href="http://www.appeti.in" className="dropdown-toggle" data-toggle="dropdown">Sign In <b className="caret"></b></a>
                     <ul className="dropdown-menu">

                        <li>
                           <input className="btn btn-primary btn-block" type="button" id="sign-in-facebook" value="Sign In with Facebook" />
                        </li>
                        <center>or</center>

                        <li>
                           <div className="row">
                              <div className="col-md-12">
                                 <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                    <div className="form-group">
                                       <label className="sr-only" htmlFor="InputName">Name</label>
                                       <input type="name" className="form-control" id="InputName" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                       <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                       <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                                    </div>
                                    <div className="form-group">
                                       <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                       <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                    </div>
                                    {/*<div className="checkbox">
                                       <label>
                                       <input type="checkbox" /> Remember me
                                       </label>
                                    </div>*/}
                                    <div className="form-group">
                                       <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                    </div>
                                    
                                 </form>
                              </div>
                           </div>
                        </li>

                        <li className="divider"></li>
                        <input className="btn btn-warning btn-block" type="button" id="register" value="I don't have an account" />

                     </ul>
                  </li>

              </ul>
            </div>
          </div>
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

