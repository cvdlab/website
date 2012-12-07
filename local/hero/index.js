var domify = require('domify');
var View = require('backbone-view');
var template = require('./template');

module.exports = View.extend({

  initialize: function (options) {
    this.setElement(domify(template));
    return this;
  },

  render: function (options) {
    var options = options || {};
    var title = options.title || '';
    var subtitle = options.subtitle || '';
    var el = this.$el;
    el.find('h1').text(title);
    el.find('h2').text(subtitle);
    return this;
  },

  events: {}

});