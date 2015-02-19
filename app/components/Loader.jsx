var React = require('react');
var $ = require('jquery');

var loaderHtml = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100" id=circle-middle><circle fill=#EDEDED cx=50 cy=50 r="6"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg>'

var Loader = React.createClass({
  componentDidMount: function() {
    $('#' + this.props.id).append(loaderHtml);
  },

  componentWillUnmount: function() {
    $('#' + this.props.id).html('');
  },

  render: function() {
    return (
      <div className='loader-container'>
        <div className='loader' id={this.props.id}>
        </div>
      </div>
    )
  }
});

module.exports = Loader