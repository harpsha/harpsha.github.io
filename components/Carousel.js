var React = require('react');
var ReactDOM = require('react-dom');

var baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://www.appeti.in';
}

const CarouselExp = React.createClass({
  render() {
    return (
      <div id="example1" className="slider-pro">
        <div className="sp-slides">
          <div className="sp-slide">
            <img className="sp-image" src="img/blank.gif"
              data-src="img/appeti_homex.jpg"
              data-retina="img/appeti_homex.jpg"/>
          </div>

          <div className="sp-slide">
            <img className="sp-image" src="img/blank.gif"
              data-src="img/appeti_home0.jpg"
              data-retina="img/appeti_home0.jpg"/>
          </div>

              <div className="sp-slide">
                <img className="sp-image" src="img/blank.gif"
                  data-src="img/appeti_home1.jpg"
                  data-retina="img/appeti_home1.jpg"/>
          </div>

          <div className="sp-slide">
            <img className="sp-image" src="img/blank.gif"
              data-src="img/appeti_home2.jpg"
              data-retina="img/appeti_home2.jpg"/>
          </div>

          <div className="sp-slide">
            <img className="sp-image" src="img/blank.gif"
              data-src="img/appeti_home3.jpg"
              data-retina="img/appeti_home3.jpg"/>
          </div>

          <div className="sp-slide">
            <img className="sp-image" src="img/blank.gif"
              data-src="img/appeti_home4.jpg"
              data-retina="img/appeti_home4.jpg"/>
          </div>
        </div>

        <div className="sp-thumbnails">
          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">It's Valentine's Day!</div>
            <div className="sp-thumbnail-description">Flat 20% Off!</div>
          </div>

          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">Appeti!</div>
            <div className="sp-thumbnail-description">How it works</div>
          </div>

          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">Republic Day Sale!</div>
            <div className="sp-thumbnail-description">Flat 13% Off Site-wide</div>
          </div>

          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">Chocolate fever!</div>
            <div className="sp-thumbnail-description">Half kg chocolates for Rs499</div>
          </div>

          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">Khakhra Combos</div>
            <div className="sp-thumbnail-description">In 5 different flavours</div>
          </div>

          <div className="sp-thumbnail">
            <div className="sp-thumbnail-title">Other delicacies</div>
            <div className="sp-thumbnail-description">Cakes, cookies and more</div>
          </div>
        </div>
        </div>
    )
  }
});

ReactDOM.render(
  <CarouselExp />,
  document.getElementById('carousel')
);

module.exports = CarouselExp;