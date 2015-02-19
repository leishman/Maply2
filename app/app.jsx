React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var WorldMap = require ('./components/WorldMap.jsx');
var Country = require ('./components/Country.jsx');
var CountryNews = require ('./components/CountryNews.jsx');
var About = require ('./components/About.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div className="body-container">
        <nav className="nav">
          <ul className="nav-buttons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
        <div className="app-container">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={App} location="history">
    <DefaultRoute handler={WorldMap}/>
    <Route name="countries" path="countries/:country" handler={Country}>
      <Route name="country_news" path="news" handler={CountryNews}/>
    </Route>
    <Route name="about" handler={About}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;


