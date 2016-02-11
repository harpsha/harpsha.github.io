var React            = require('react');
var ReactDOM         = require('react-dom');
var GitHubForkRibbon = require('react-github-fork-ribbon');

var Content = React.createClass({

  render: function () {
    return (
      <GitHubForkRibbon href="//www.google.com"
                        target="_blank"
                        position="left">
        Whatsapp 9005671616!
      </GitHubForkRibbon>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('whatsapp')
);

module.exports = Content;