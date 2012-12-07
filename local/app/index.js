var Navbar = require('navbar');
var Hero = require('hero');
var MainIndex = require('main-index');
var MainAbout = require('main-about');
var MainPeople = require('main-people');
var MainBio = require('main-bio');
var MainCG = require('main-cg');
var MainProjects = require('main-projects');
var Copyright = require('copyright');
var Router = require('backbone-router');

module.exports = Router.extend({

  initialize: function() {
    var anchors = {
      navbar: $('#navbar'),
      hero: $('#hero'),
      main: $('#main'),
    };

    var views = {
      navbar: new Navbar(),
      hero: new Hero(),
      main_index: new MainIndex(),
      main_about: new MainAbout(),
      main_people: new MainPeople(),
      main_bio: new MainBio(),
      main_cg: new MainCG(),
      main_projects: new MainProjects(),
      copiright: new Copyright(),
    };

    anchors.navbar.after(navbar.el);
    anchors.hero.after(hero.el);
    anchors.copiright.after(copiright.el);

    this.views = views;
    this.anchors = anchors;
    this.history = Router.history;
    this.history.start(/*{pushState: true}*/);
  },

  routes: {
    '': 'index',
    'about': 'about',
    'people': 'people',
    'teaching/bio': 'bio',
    'teaching/cg': 'cg',
    'projects': 'projects'

  },

    render: function(main_page, hero_model) {
      var views = views;
      var anchor_main = this.anchors.main;

      views.hero.render(hero_model);
      anchors_main.find('.main').hide();
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