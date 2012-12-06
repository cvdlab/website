var $ = require('jquery');
var Home = require('view-home');

var views = {
  home: new Home({el: $('#home')})
};


views.home.render();

exports = {
  views: views
};