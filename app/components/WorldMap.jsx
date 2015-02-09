var React = require('react');
var d3 = require('d3');
var topojson = require('topojson');
var CountryListActions = require('../actions/CountryListActions')

var WorldMap = React.createClass({
  componentDidMount: function() {
    drawGlobe();
  },

  componentWillUnmount: function() {
    
  },

  render: function() {
    return (
      <div id="map"></div>
    );
  }
});


function drawGlobe() {

  var width = 1200;
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


  // var g = svg.append('g');

  d3.json('/data/world.topo.json', function(err, data) {
    if(err) return console.log(err);

      // generate SVG elements for each country
      g.selectAll('path')
        .data(topojson.feature(data, data.objects.world).features)
      .enter().append('path')
        .attr('d', path)
        .attr('class', 'land')

      // bind Drag events for country clicks
      .call(bindDrag())
        .on('mouseover', hover)
        .on('dblclick', click)

    function hover(h) {
      svg.selectAll('path')
        .classed('active', function(d) { return h === d })
    }

    function click(h) {
      // TODO figure out how to move this into component
      CountryListActions.create(h.properties);
    }
  });

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
      })
  }
}

module.exports = WorldMap;