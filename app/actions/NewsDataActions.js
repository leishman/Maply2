var AppDispatcher = require('../dispatcher/AppDispatcher');
var CountryConstants = require('../constants/CountryConstants');
var $ = require('jquery');

var NewsDataActions = {
  load: function(countryName) {
    // TODO extract NYT API Logic
    var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sample-key&fq=source:("The New York Times")&fq=glocations:(' + countryName + ')';

    AppDispatcher.dispatch({
      actionType: CountryConstants.LOAD_COUNTRY_DATA
    });
    
    $.get(url)
    .done(function(data) {
      AppDispatcher.dispatch({
        actionType: CountryConstants.LOAD_COUNTRY_DATA_SUCCESS,
        data: data
      });
    })
    .fail(function(xhr, status, err) {
      AppDispatcher.dispatch({
        actionType: CountryConstants.LOAD_COUNTRY_DATA_FAIL,
        error: err
      });
    });
  }
}

module.exports = NewsDataActions;