import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';

import './user_home.html';

Template.UserHome.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    Meteor.subscribe('cities');
  });
});

Template.UserHome.helpers({
  username() {
    return Meteor.user().username;
  },

  cities() {
    return Cities.find();
  },

});
