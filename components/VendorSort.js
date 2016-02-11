/*var React = require('react');


var VendorSort = React.createClass({
  render: function () {
    return (
      <div id='VendorSort'>
        VendorSort
      </div>
    )
  }
});*/




import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

ReactDOM.render(
  <Coverflow
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={true}
    enableScroll={true}
    media={{
      '@media (max-width: 900px)': {
        width: '600px',
        height: '300px'
      },
      '@media (min-width: 900px)': {
        width: '960px',
        height: '400px'
      }
    }}
    >
    <img src='img/vendor1.png' alt='Dodha House' url="http://appeti.in/shop/seller/72/dodha-house-ludhiana"/>
    <img src='img/vendor2.png' alt='Ghasitaram' url="http://appeti.in/shop/seller/78/ghasitaram-mumbai"/>
    <img src='img/vendor3.png' alt='Chitale Bandhu Mithaiwale' url="http://appeti.in/shop/seller/62/chitale-bandhu-mithaiwale-pune"/>
    <img src='img/vendor4.png' alt='Mahalaxmi Foods' url="http://appeti.in/shop/seller/77/mahalaxmi-foods-jalgaon"/>
    <img src='img/vendor5.png' alt='Sai Purohit' url="http://appeti.in/shop/seller/82/sai-purohit-belgaum"/>
  </Coverflow>
  ,
  document.querySelector('.example_2')
);


//module.exports = VendorSort;