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
var Hero = require('hero');
var navbar = new Navbar();
var hero = new Hero();
document.body.appendChild(navbar.el);
document.body.appendChild(hero.el);
hero.render({
  title: 'CVDLAB', 
  subtitle: 'Computational Visual Design Lab'
});