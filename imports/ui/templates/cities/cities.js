import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Cities } from '../../../api/cities/cities.js';

import './cities.html';

Template.Cities.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    _this.subscribe('cities');
  });
});

Template.Cities.helpers({
  cities() {
    return Cities.find();
  },
});

Template.Cities.events({
  'click .cityname': function(event, instance) {
    event.preventDefault();

    const cityId = this._id;
    FlowRouter.go('city', { id: cityId });
  },
});
