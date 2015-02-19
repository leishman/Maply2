React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CountryOverview = React.createClass({
  render: function() {
    return (
      <div className="country-overview">
        <h4>{this.props.countryName}</h4>
        Country Overview Info Here
      </div>
    );
  }
});

module.exports = CountryOverview;