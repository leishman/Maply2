var React = require('react');

var CountryList = React.createClass({

  componentDidMount: function() {

  },

  render: function() {

    var allCountries = this.props.allCountries;
    var countries = []
    
    for (var key in allCountries) {
      countries.push(<li> { allCountries[key].name } </li>);
    }

    return (
      <ul id="country-list">
        {countries}
      </ul>
    );
  }
});

module.exports = CountryList;