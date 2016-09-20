import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import { Cities } from '../../../api/cities/cities.js';
import { UserPoints} from '../../../api/userpoints/userpoints.js';

import './user_home.html';

Template.UserHome.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    _this.subscribe('cities');
    _this.subscribe('userpoints');
  });
});

Template.UserHome.onRendered(function() {
  const instance = Template.instance();
  instance.calculating = new ReactiveVar();
});

Template.UserHome.helpers({
  username() {
    return Meteor.user().username;
  },

  cities() {
    return Cities.find();
  },

  points() {
    return UserPoints.findOne();
  },

  calculating() {
    const instance = Template.instance();
    return instance.calculating.get()=='calculating' ? 'disabled' : '';
  },
});

Template.UserHome.events({
  'click .calculate-points': function(event, instance) {
    event.preventDefault();
    instance.calculating.set('calculating');

    Meteor.call('userpoints.calculate', function() {
      instance.calculating.set('');
    });
  },
});
