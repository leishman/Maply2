var React = require('react');
var d3 = require('d3');
var topojson = require('topojson');
var MapDataActions = require('../actions/MapDataActions');
var Navigation = require('react-router').Navigation;
var MapDataStore = require('../stores/MapDataStore');
var _ = require('lodash');

MapDataActions.load();

var onClickGlobal;

function getState() {
  return {
    mapData: MapDataStore.getAll()
  }
}

var WorldMap = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return getState();
  },

  componentWillMount: function() {
    onClickGlobal = this._onClick
  },

  componentDidMount: function() {
    MapDataStore.addChangeListener(this._onChange);
    this._renderMap();
  },

  componentWillUnmount: function() {
    MapDataStore.removeChangeListener(this._onChange);
  },

  componentDidUpdate: function() {
    var mapData = this.state.mapData;

    if (!_.isEmpty(mapData)) {
      this._renderMap(mapData);
    }
  },

  render: function() {
    return (
      <div id="map"></div>
    );
  },

  _onClick: function(h) {
    var snakeName = _.snakeCase(h.properties.name);
    this.transitionTo('countries', { country: snakeName })
  },

  _onChange: function() {
    this.setState(getState());
  },

  _renderMap: function() {
    var mapData = this.state.mapData;
    if (Object.keys(mapData).length > 0) {
      renderMap(mapData);
    }
  }
});

function renderMap(data) {
  // debugger
  var width = 900;
  var height = 800;
  sens = 0.25;

  var projection = d3.geo.orthographic()
    .rotate([90, 0])
    .scale(350)
    .clipAngle(90)
    .translate([width / 2, height / 2]);


  var path = d3.geo.path()
              .projection(projection);

  var svg = d3.select('#map').append('svg')
    .attr('width', width)
    .attr('height', height)

    // ocean
  var g = svg.append('g');


  g.append('path')
    .datum({type: 'Sphere'})
    .attr('class', 'ocean')
    .attr('height', 300)
    .attr('d', path)

    // bind Drag events for ocean clicks
    .call(bindDrag());

  function bindDrag() {
    return d3.behavior.drag()
      .origin(function() {
        var r = projection.rotate();
        return {x: r[0] / sens, y: -r[1] / sens}; 
      })
      .on('drag', function() {
        var rotate = projection.rotate();
        projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]])
        svg.selectAll('path.land').attr('d', path);
      });
  }

  // generate SVG elements for each country
  g.selectAll('path')
    .data(topojson.feature(data, data.objects.world).features)
  .enter().append('path')
    .attr('d', path)
    .attr('class', 'land')

  // bind Drag events for country clicks
  .call(bindDrag())
    .on('mouseover', hover)
    .on('click', click);

  function hover(h) {
    svg.selectAll('path')
      .classed('active', function(d) { return h === d })
  }

  function click(h) {
    onClickGlobal(h);
  }
};



module.exports = WorldMap;