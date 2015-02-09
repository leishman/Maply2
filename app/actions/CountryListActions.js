
var AppDispatcher = require('../dispatcher/AppDispatcher');
var MapConstants = require('../constants/MapConstants');

var CountryListActions = {
  create: function(country) {
    AppDispatcher.dispatch({
      actionType: MapConstants.MAP_COUNTRY_VISIT,
      name: country.name
    });
  }
}

module.exports = CountryListActions