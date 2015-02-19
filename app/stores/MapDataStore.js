
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MapConstants = require('../constants/MapConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

_worldData = {}

function loadWorldData(data) {
  _worldData = data;
}

var MapDataStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _worldData;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.actionType;
  var data = payload.data;

  switch(action) {
    case MapConstants.LOAD_MAP_DATA_SUCCESS:
      loadWorldData(data);
      break;
    default:
      return true;
     //no op
  }

  MapDataStore.emitChange();
  return true;
});
// AppDispatcher.register(function(action) {
//   switch(action.actionType) {
//     case MapConstants.MAP_COUNTRY_VISIT:
//       create(action.name);
//       MapStore.emitChange();
//       break;
//     default:
//      // no op
//   }
// });

module.exports = MapDataStore;