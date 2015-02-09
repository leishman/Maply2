
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MapConstants = require('../constants/MapConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _visitedCountries = {};

function create(name) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _visitedCountries[id] = {
    id: id,
    visited: true,
    name: name
  };
}

var MapStore = assign({}, EventEmitter.prototype, {

  getNumberOfCountries: function() {
    return _visitedCountries.length;
  },

  getAllCountries: function() {
    return _visitedCountries;
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

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case MapConstants.MAP_COUNTRY_VISIT:
      create(action.name);
      MapStore.emitChange();
      break;
    default:
     // no op
  }
});

module.exports = MapStore;