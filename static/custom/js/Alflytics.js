/*********************************** Alflytics ********************************************/
var Alflytics = {};

(function(myself) {

  myself.changeLocation = function (newLocation, bookmarks, isNew) {
    if (!newLocation) { return; }
    var hash = (bookmarks && !_.isEmpty(bookmarks) ) ? '?bookmarkState=' + encodeURI( generateHashValue( { impl: "client" , params: bookmarks } ) ) : "";
    if (isNew) {
      window.open(newLocation + hash);
    } else {
      window.location = newLocation + hash;
    }
  }

  function generateHashValue (key, value) {
    var obj = Dashboards.getHashValue(), json;
    if (arguments.length == 1) {
      obj = key;
    } else {
      obj[key] = value;
    }
    json = JSON.stringify(obj);
    return json;
  }

  myself.runEndpoint = function (pluginId, endpoint, opts) {

    if (!pluginId && !endpoint) {
      Dashboards.log('PluginId or endpointName not defined.');
      return false
    }

    var _opts = {
      success: function () {
        Dashboards.log(pluginId + ': ' + endpoint + ' ran successfully.')
      },
      error: function () {
        Dashboards.log(pluginId + ': error running ' + endpoint + '.')
      },
      params: {},
      systemParams: {},
      type: 'POST',
      dataType: 'json'
    }
    var opts = $.extend({}, _opts, opts);
    var url = Dashboards.getWebAppPath() + '/plugin/' + pluginId + '/api/' + endpoint;

    function successHandler  (json) {
      if (json && json.result == false) {
        opts.error.apply(this, arguments);
      } else {
        opts.success.apply( this, arguments );
      }
    }

    function errorHandler () {
      opts.error.apply(this, arguments);
    }
    if ( endpoint != 'renderer/refresh' ) {
      var ajaxOpts = {
        url: url,
        async: true,
        type: opts.type,
        dataType: opts.dataType,
        success: successHandler,
        error: errorHandler,
        data: {}
      }
    } else {
      var ajaxOpts = {
        url: url,
        async: true,
        type: 'GET',
        dataType: opts.dataType,
        success: successHandler,
        error: errorHandler,
        data: {}
      }
    }

    _.each( opts.params , function (value , key) {
      ajaxOpts.data['param' + key] = value;
    });
    _.each( opts.systemParams , function (value , key) {
      ajaxOpts.data[key] = value;
    });

    $.ajax(ajaxOpts)
  }

})(Alflytics);

