Backbone.old_sync = Backbone.sync
Backbone.sync = function(method, model, options) {
    var new_options =  _.extend({
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-Spree-Token', Spree.api_key);
        }
    }, options)
    Backbone.old_sync(method, model, new_options);
};

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-Spree-Token', Spree.api_key);
  }
});
