var AppDispatcher = require('../dispatcher/AppDispatcher');
var MapConstants = require('../constants/MapConstants');
var $ = require('jquery');

var MapDataActions = {
  load: function() {
    AppDispatcher.dispatch({
      actionType: MapConstants.LOAD_MAP_DATA
    });

    $.getJSON('/data/world.topo.json')
      .done(function(data) {
        AppDispatcher.dispatch({
          actionType: MapConstants.LOAD_MAP_DATA_SUCCESS,
          data: data
        });
      })
      .fail(function(xhr, status, err) {
        AppDispatcher.dispatch({
          actionType: MapConstants.LOAD_MAP_DATA_FAIL,
          error: err
        });
      });
  }
}

module.exports = MapDataActions;