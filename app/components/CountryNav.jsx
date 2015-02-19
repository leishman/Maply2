var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

CountryOverview = require('./CountryOverview.jsx');

var CountryNav = React.createClass({
  render: function() {
    return (
      <div className="sidenav country-nav">
        <h4>{_.startCase(this.props.countryName)}</h4>
        <ul className="sidenav-buttons">
          <li>
            <Link to="country_news" params={{country: this.props.countryName }}>News</Link>
          </li>
        </ul>
        <CountryOverview countryName={this.props.countryName}/>
      </div>
    );
  }
});

module.exports = CountryNav;