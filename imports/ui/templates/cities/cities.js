import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';

import './cities.html';

Template.Cities.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    Meteor.subscribe('cities');
  });
});

Template.Cities.helpers({
  cities() {
    return Cities.find();
  },
});
