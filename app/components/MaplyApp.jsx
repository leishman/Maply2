var React = require('react');
var WorldMap = require('./WorldMap.jsx');
var CountryList = require('./CountryList.jsx');
var MapStore = require('../stores/MapStore');

function getCountryListState() {
  return {
    allCountries: MapStore.getAllCountries()
  }
}

var MaplyApp = React.createClass({
  getInitialState: function() {
    return getCountryListState();
  },

  componentDidMount: function() {
    MapStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {

  },

  render: function() {
    return (
      <div>
        < CountryList allCountries={this.state.allCountries} />
        < WorldMap />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getCountryListState());
  }
});


module.exports = MaplyApp;