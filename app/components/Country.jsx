var React = require('react');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var CountryNews = require('./CountryNews.jsx');
var CountryNav = require('./CountryNav.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var NewsDataStore = require('../stores/NewsDataStore');
var NewsDataActions = require('../actions/NewsDataActions');
var _ = require('lodash');


var Country = React.createClass({
  mixins: [Navigation, State],

  getInitialState: function() {
    return this._getState();
  },

  componentWillMount: function() {
    // TODO: move this earlier in the sequence?
  },

  componentDidMount: function() {
    // NewsDataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    // NewsDataStore.removeChangeListener(this._onChange);
  },

  componentWillUpdate: function() {
  },

  render: function() {
    var countryName = this.state.countryName
    return (
      <div>
        <CountryNav countryName={countryName} />
        <div className="country">
          <RouteHandler/>
        </div>
      </div>
    );
  },

  _getState: function() {
    return {
      countryName: this.getParams().country
    };
  },

  _onChange: function() {
    this.setState(this._getState());
  }
});

module.exports = Country;