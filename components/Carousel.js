var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');

var baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://www.appeti.in';
}

const CarouselExp = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
    	<div style={{width: '50%', margin: 'auto'}}>
 			<Carousel dragging={true}>
        		<img src={baseUrl + '/img/appeti_home0.jpg'}/>
        		<img src={baseUrl + '/img/appeti_home1.jpg'}/>
        		<img src={baseUrl + '/img/appeti_home2.jpg'}/>
            <img src={baseUrl + '/img/appeti_home3.jpg'}/>
      		</Carousel>
      	 </div>
    )
  }
});

ReactDOM.render(
  <CarouselExp />,
  document.getElementById('carousel')
);

module.exports = CarouselExp;