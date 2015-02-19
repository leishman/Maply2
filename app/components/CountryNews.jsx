var React = require('react');
var State = require('react-router').State;
var Loader = require('./loader.jsx');
var NewsDataStore = require('../stores/NewsDataStore');
var NewsDataActions = require('../actions/NewsDataActions');
var _ = require('lodash');

var CountryNews = React.createClass({
  mixins: [State],

  getInitialState: function() {
    NewsDataActions.load(_.startCase(this.getParams().country));
    return { newsData: [] }
  },

  componentWillMount: function() {
    // debugger
  },

  componentDidMount: function() {
    NewsDataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NewsDataStore.removeChangeListener(this._onChange);
  },

  componentWillUpdate: function() {
  },

  render: function() {
    var articleTitles = [];
    _.forIn(this.state.newsData, function(val, key) {
      articleTitles.push(<li><a href={val.web_url}>{val.headline.main}</a></li>);
    });
    if (_.isEmpty(articleTitles)) {
      return (
        <div className="country-news">
          <Loader id="js-country-news-loader"/>
        </div>
      );
    } else {
      return (
        <div className="country-news">
          <ul>{articleTitles}</ul>
        </div>
      );
    }
  },

  _getState: function() {
    return {
      newsData: NewsDataStore.getAll()
    };
  },

  _onChange: function() {
    this.setState(this._getState());
  }
});

module.exports = CountryNews;