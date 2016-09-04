import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../api/cities/cities.js';
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
        //console.log(worker);

        const city = Cities.findOne(worker.city);

        if (Math.random() < worker.prob_wood) {
          if (Math.random() < city.prob_storage_wood) {
            Meteor.call('cities.update_wood', city._id, city.wood_production);
          }
        }

        if (Math.random() < worker.prob_stone) {
          if (Math.random() < city.prob_storage_stone) {
            Meteor.call('cities.update_stone', city._id, city.stone_production);
          }
        }

        if (Math.random() < worker.prob_reproduce) {
          Meteor.call('workers.insert', worker.owner, worker.city, worker.role);
        }

        if (Math.random() < worker.prob_die) {
          Meteor.call('workers.remove', worker._id, worker.city);
        } else {
          Meteor.call('workers.birthday', worker._id);
        }
      });
    } catch (err) {
      console.log('please investigate if errors occour', err);
    }

  //}, 5 * 60 * 1000);  // update every 5 min
}, 15000);  // update every 5 sec (debug)
});
