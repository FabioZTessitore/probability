import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Workers } from '../../api/workers/workers.js';

import '../partials/header.js';
import './user_layout.html';

Template.UserLayout.onCreated(function () {
  const _this = this;

  _this.autorun(function () {
    _this.subscribe('workers');
  });
});

Template.UserLayout.onRendered(function () {
  Meteor.setInterval(function () {
    try {
    const workers = Workers.find().fetch();

    _(workers).forEach(function (worker) {
      if (Math.random() < worker.prob_reproduce) {
        Meteor.call('workers.insert', worker.owner);
      }

      if (Math.random() < worker.prob_die) {
        Meteor.call('workers.remove', worker._id);
      }
    });
  } catch (err) {
    console.log('please investigate if errors occour', err);
  }
  //}, 5 * 60 * 1000);  // update every 5 min
}, 2000);  // update every 2 sec (debug)
});
