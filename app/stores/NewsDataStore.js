
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CountryConstants = require('../constants/CountryConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _newsData = {}

function saveNewsData(data) {
  _newsData = data.response.docs;
}

var NewsDataStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _newsData;
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
    case CountryConstants.LOAD_COUNTRY_DATA_SUCCESS:
      saveNewsData(data);
      break;
    default:
      return true;
  }

  NewsDataStore.emitChange();
});

module.exports = NewsDataStore;


