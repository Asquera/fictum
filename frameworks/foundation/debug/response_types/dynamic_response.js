sc_require('debug/base');
sc_require('debug/utils/json');

Fictum.DynamicResponse = SC.Object.extend({
  value: function(store, request) {
    return JSON.stringify(this.get('response')(store, request));
  }
});
