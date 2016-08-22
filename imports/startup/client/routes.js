import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/templates/not_found.html';
import '../../ui/templates/signup/signup.js';
import '../../ui/templates/login/login.js';
import '../../ui/templates/home/home.js';
import '../../ui/templates/user_home/user_home.js';
import '../../ui/layouts/main_layout.js';
import '../../ui/templates/cities/cities.js';
import '../../ui/layouts/user_layout.js';

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('MainLayout', { content: 'NotFound' });
  },
};

FlowRouter.route('/', {
  name: 'home-page',
  action() {
    BlazeLayout.render('MainLayout', { content: 'Home' });
  },
});

FlowRouter.route('/cities', {
  name: 'cities',
  action() {
    BlazeLayout.render('MainLayout', { content: 'Cities' });
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('MainLayout', { content: 'Signup' });
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', { content: 'Login' });
  },
});

FlowRouter.route('/home', {
  name: 'user-home',
  action() {
    BlazeLayout.render('UserLayout', { content: 'UserHome' });
  },
});
