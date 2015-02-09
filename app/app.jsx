React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var MaplyApp = require ('./components/MaplyApp.jsx');
var About = require ('./components/About.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App} location="history">
    <Route name="home" handler={MaplyApp}/>
    <Route name="about" handler={About}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;


