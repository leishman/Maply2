var $ = require('jquery');

var svg = <div class="loader"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100" id=circle-middle><circle fill=#EDEDED cx=50 cy=50 r="6"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle fill=#26A6D1 cx=50 cy=50 r="4.5"/></svg></div>

var LoaderAgent = {
  getHtml: function() {
    return svg;
  }
}



module.exports = LoaderAgent;