var $ = require('jquery');
var domify = require('domify');
var View = require('backbone-view');
var template = require('./template');

module.exports = View.extend({

  initialize: function (options) {
    this.setElement(domify(template));
    return this;
  },

  render: function () {
    return this;
  },

  activate: function (item) {
    $(item).addClass('active');
    return this;
  },

  deactivate: function (item) {
    $(item).removeClass('active');
    return this;
  },

  deactivate_all: function () {
    $('li').removeClass('active');
    return this;
  },

  events: {
    'click li': 'on_click_item'
  },

  on_click_item: function (event) {
    this.deactivate_all().activate(event.currentTarget);
  }

});