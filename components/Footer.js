var React = require('react');
var ReactDOM = require('react-dom');

var Footer = React.createClass({
  render: function () {
    return (
      <div id="footer">
<div className="container">
  <div className="row">
    
      <div className="col-sm-2">
        <div className="foot-header">
          Flavours <img src="../img/footer/icon-cocha.png"></img>
        </div>
        <div className="foot-links">
          <a href="http://appeti.in/shop/category/90901/sweets">Sweets</a>
          <a href="http://appeti.in/shop/category/90902/snacks">Snacks</a>
          <a href="http://appeti.in/shop/category/90905/beverage">Beverages</a>
          <a href="http://appeti.in/shop/category/90907/bakery">Bakery</a>
          <a href="http://appeti.in/shop/category/90908/others" target="_blank">Others</a>
          <a href="http://appeti.in/shop/category/90909/combos" target="_blank">Combos</a>
          <a href="http://appeti.in/shop/category/90910/chocolates" target="_blank">Chocolates</a>
          <a href="http://appeti.in/shop/category/90911/health" target="_blank">Health</a>
        </div>
      </div>
    <div className="col-sm-3">
        <div className="foot-header">
          Terms & Policies <img src="../img/footer/servicio-al-cliente-icon.png"></img>
        </div>
        <div className="foot-links">
          <a href="http://appeti.in/terms-of-service">Terms of Service</a>
          <a href="http://appeti.in/privacy-policy">Privacy Policy</a>
          <a href="http://appeti.in/delivery-shipping">Delivery & Shipping</a>
          <a href="http://appeti.in/refunds-cancellations">Cancellation & Refunds</a>
        </div>
      </div>
    <div className="col-sm-2">
      <div className="foot-header">
        Payment Options<img src="../img/footer/card-icon.png"></img>
      </div>
      <div className="foot-links">
        <p>
          <i className="fa fa-check text-success"></i> PayUmoney<br></br>
          <img src="../img/footer/visa-card.png"></img>
          <img src="../img/footer/master-card.png"></img>
        </p>
        <p>
          <i className="fa fa-check text-success"></i> CC Avenue<br></br>
          <img src="../img/footer/banco-santander-card-1.png"></img>
          <img src="../img/footer/banco-de-chile-card-1.png"></img>
        </p>
      </div>
    </div>
        <div className="col-sm-2">
      <div className="foot-header">
        Delivery Partners<img src="../img/footer/card-icon.png"></img>
      </div>
      <div className="foot-links">
        <p>
          <i className="fa fa-check text-success"></i> Fedex<br></br>
          <img src="../img/footer/banco-santander-card-1.png"></img>
          <img src="../img/footer/banco-de-chile-card-1.png"></img>
        </p>
        <p>
          <i className="fa fa-check text-success"></i> Bluedart<br></br>
          <img src="../img/footer/ripley-card.png"></img>
        </p>
      </div>
    </div>

    <div className="col-sm-2">
      <div className="foot-header">
        Download App <img width="20px" src=".//img/android.png"></img>
      </div>
      <img width="150px" src="../img/android-playstore.png"></img>
    </div>
    
  	</div>
  <div className="row">
    <center><img src="../img/footer/footer-bg.png"></img></center>
    <div id="bottom-footer">
      <div className="row">
        <div className="col-md-8">
          <a href="http://appeti.in/valentine-offers"><b>Valentines Special</b></a>
        <a href="http://appeti.in/about">About Us</a>
        <a href="http://appeti.in/appet-i-team">Team</a>
        <a href="http://appeti.in/we-are-hiring">Career</a>
          <a href="http://appeti.in/contact-us">Contact Us</a>
        <a href="http://appeti.in/blogs">Blog</a>
        <a href="http://appeti.in/testimonials">Testimonials</a>
        </div>
        <div className="col-md-4 phone">
          <img src="../img/footer/phone-icon.png" className="pull-left"></img>
          <div className="pull-left">
            <span className="red">022-26500935/8<small>Call Us Anytime</small></span>
          </div>
          <div className="pull-right">
            <span className="red">contact@appeti.in<small>Email Us</small></span>
          </div>
          </div>
    </div>
  </div>
      <div className="row" id="final-footer">
        <div className="col-sm-4">
          <img src="../img/footer/RapidSSL_SEAL-90x50.gif"></img>
        </div>
        <div className="col-sm-4 text-center">
        	Copyright © 2016 Appeti. All Rights Reserved.<br></br>
			A219, Kanakia Zillion, BKC Annexe, Mumbai - India
        </div>
        <div className="col-sm-4 text-right">
        	<span className="fa-stack fa-lg">
              <i className="fa fa-circle text-primary fa-stack-2x"></i>
              <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
          <span className="fa-stack fa-lg">
              <i className="fa fa-circle text-info fa-stack-2x"></i>
              <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          <span className="fa-stack fa-lg">
              <i className="fa fa-circle text-danger fa-stack-2x"></i>
              <i className="fa fa-youtube fa-stack-1x fa-inverse"></i>
            </span>
          <span className="fa-stack fa-lg">
              <i className="fa fa-circle text-danger fa-stack-2x"></i>
              <i className="fa fa-pinterest fa-stack-1x fa-inverse"></i>
            </span>
          <span className="fa-stack fa-lg">
              <i className="fa fa-circle text-danger fa-stack-2x"></i>
              <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
        </div>
      </div>

    

  </div>

<div className="navbar navbar-default navbar-fixed-bottom">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".bottom-collapse">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Copyright © 2016 Appeti.</a>
    </div>
    <div className="navbar-collapse collapse bottom-collapse">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">More</a></li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="#">Sweets</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Bakery</a></li>
            <li><a href="#">Others</a></li>
            <li><a href="#">Combos</a></li>
            <li><a href="#">Chocolate</a></li>
            <li><a href="#">Health</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Terms & Policies <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Delivery & Shipping else here</a></li>
            <li><a href="#">Cancellation & Refunds</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Payment & Delivery <b className="caret"></b></a>
          <ul className="dropdown-menu">
          	<li className="dropdown-header">Payment Options</li>
            <li><a href="#">PayTM</a></li>
            <li><a href="#">PayUmoney</a></li>
            <li><a href="#">Mobikwik</a></li>
            <li className="divider"></li>
            <li className="dropdown-header">Delivery partners</li>
            <li><a href="#">Fedex</a></li>
            <li><a href="#">Bluedart</a></li>
          </ul>
        </li>

        <li className="active"><a href="#">About Us & team etc</a></li>

      </ul>
    </div>
  </div>
</div>

</div></div>

        
    )
  }
});

module.exports = Footer;

ReactDOM.render(<Footer />, document.getElementById('footer'));