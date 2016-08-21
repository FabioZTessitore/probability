import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Workers } from '../../../api/workers/workers.js';

import './user_home.html';

Template.UserHome.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    Meteor.subscribe('workers');
  });
});

Template.UserHome.helpers({
  numberOfWorkers() {
    return Workers.find().count();
  },
});
