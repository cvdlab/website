// var $ = require('jquery');
// var Home = require('view-home');

// var views = {
//   home: new Home({el: $('#home')})
// };


// views.home.render();

// exports = {
//   views: views
// };


var Navbar = require('navbar');

debugger;
var navbar = new Navbar();

document.body.appendChild(navbar.el);