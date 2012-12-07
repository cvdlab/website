var Navbar = require('navbar');
var Hero = require('hero');
var main_index = require('main-index');
var main_about = require('main-about');
var main_people = require('main-people');
var main_bio = require('main-bio');
var main_cg = require('main-cg');
var main_projects = require('main-projects');
var copyright = require('copyright');
var Router = require('backbone-router');
var $ = require('jquery');

module.exports = Router.extend({

  initialize: function() {
    var anchors = {
      navbar: $('#navbar'),
      hero: $('#hero'),
      main: $('#main'),
      copyright: $('#copyright')
    };

    var views = {
      navbar: new Navbar(),
      hero: new Hero(),
      main_index: main_index,
      main_about: main_about,
      main_people: main_people,
      main_bio: main_bio,
      main_cg: main_cg,
      main_projects: main_projects,
      copyright: copyright,
    };

    anchors.navbar.after(views.navbar.el);
    anchors.hero.after(views.hero.el);
    anchors.copyright.after(views.copyright);

    anchors.main
      .after(views.main_index.hide())
      .after(views.main_about.hide())
      .after(views.main_people.hide())
      .after(views.main_bio.hide())
      .after(views.main_cg.hide())
      .after(views.main_projects.hide())

console.log($('.main'));

    this.views = views;
    this.anchors = anchors;
    this.history = Router.history;
    this.history.start(/*{pushState: true}*/);
  },

  routes: {
    '': 'index',
    'about': 'about',
    'people': 'people',
    'teaching/biomedical-informatics': 'bio',
    'teaching/computational-graphics': 'cg',
    'projects': 'projects'

  },

    render: function(main_page, hero_model) {
      var views = this.views;
      var anchors_main = this.anchors.main;

      views.hero.render(hero_model);
      $('.main').hide();
      views[main_page].show();
    },

    index: function() {
      var main_page = 'main_index';
      var hero_model = {
        title: 'CVDLAB',
        subtitle: 'Computational Visual Design Laboratory'
      };

      this.render(main_page, hero_model);
    },

    about: function() {
      var main_page = 'main_about';
      var hero_model = {
        title: 'About',
        subtitle: ' '
      };

      this.render(main_page, hero_model);
    },

    people: function() {
      var main_page = 'main_people';
      var hero_model = {
        title: 'People',
        subtitle: ' '
      };

      this.render(main_page, hero_model);
    },

    bio: function() {
      var main_page = 'main_bio';
      var hero_model = {
        title: 'Teaching',
        subtitle: 'Biomedical Informatics'
      };

      this.render(main_page, hero_model);
    },

    cg: function() {
      var main_page = 'main_cg';
      var hero_model = {
        title: 'Teaching',
        subtitle: 'Computational Graphics'
      };

      this.render(main_page, hero_model);
    },

    projects: function() {
      var main_page = 'main_projects';
      var hero_model = {
        title: 'Projects',
        subtitle: ' '
      };

      this.render(main_page, hero_model);
    }
});