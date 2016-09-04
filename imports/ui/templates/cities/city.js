import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';

import './city.html';

Template.City.onCreated(function () {
  const _this = this;
  const cityId = FlowRouter.getParam('id');

  _this.autorun(function () {
    Meteor.subscribe('city', cityId);
  });
});

Template.City.helpers({
  city() {
    const cityId = FlowRouter.getParam('id');
    return Cities.findOne(cityId);
  }
});
