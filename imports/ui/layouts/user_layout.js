import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Cities } from '../../api/cities/cities.js';
import { Workers } from '../../api/workers/workers.js';

import { probReproduceDie } from '../../api/reproduce-die/probabilities.js';

import '../partials/header.js';
import './user_layout.html';

Template.UserLayout.onCreated(function () {
  const _this = this;

  _this.autorun(function () {
    _this.subscribe('cities');
    _this.subscribe('workers');
  });
});

Template.UserLayout.onRendered(function () {
  Meteor.setInterval(function () {
    try {
      const workers = Workers.find().fetch();

      _(workers).forEach(function (worker) {
        const city = Cities.findOne(worker.city);

        if (Math.random() < city.woodProbProduction) {
          if (Math.random() < city.woodProbStorage) {
            Meteor.call('cities.updateWoodStored', city._id, city.woodProductionQty);
          }
        }

        if (Math.random() < city.stoneProbProduction) {
          if (Math.random() < city.stoneProbStorage) {
            Meteor.call('cities.updateStoneStored', city._id, city.stoneProductionQty);
          }
        }

        if (Math.random() < probReproduceDie.reproduce(city.scaleProbReproduce, worker.age)) {
          Meteor.call('workers.insert', worker.owner, worker.city, worker.role);
        }

        if (Math.random() < probReproduceDie.die(city.scaleProbReproduce, worker.age)) {
          Meteor.call('workers.remove', worker._id);
        } else {
          Meteor.call('workers.birthday', worker._id);
        }
      });
    } catch (err) {
      console.log('please investigate if errors occour', err);
    }

//  }, 5 * 60 * 1000);  // update every 5 min
//}, 2 * 60 * 1000);  // update every 2 min
}, 15000);  // update every few sec (debug)
});
