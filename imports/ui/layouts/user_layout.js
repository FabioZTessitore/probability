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

  _this.limit = new ReactiveVar(250);
  _this.k_skip = new ReactiveVar(0);
  // skip = k_skip * limit -> 0, 100, 200, 300, ecc

  _this.autorun(function () {
    _this.subscribe('cities');
    _this.subscribe('workers', _this.k_skip.get(), _this.limit.get());
  });
});

Template.UserLayout.onRendered(function () {
  const instance = Template.instance();

  let skip = instance.k_skip.get();
  const limit = instance.limit.get();

  const times = 20;
  let t = 0;

  let reproductions = [];

  Meteor.setInterval(function () {
    t += 1;

    skip = instance.k_skip.get();

    console.log('skip ', skip);
    console.log('limit ', limit);


    try {
      const allCities = Cities.find().fetch();
      console.log('fetched ', allCities.length, ' cities');
      _(allCities).forEach(function (city) {
          const workers = Workers.find({ city: city._id }, { skip, limit }).fetch();
          console.log('fetched ', workers.length, ' workers');
          _(workers).forEach(function (worker) {
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

            if (Math.random() < probReproduceDie.die(city.scaleProbReproduce, worker.age)) {
              Meteor.call('workers.deactivate', worker._id);
              /*if (Workers.find({ active: false }, { skip, limit }).count() > 0 && reproductions.length > 0) {
                const workerData = reproductions.pop();
                console.log(workerData);
                const workerSlot = Workers.findOne({ active: false }, { skip, limit });
                console.log(workerSlot);
                Meteor.call('workers.activate', workerSlot._id, workerData.city, workerData.role);
                console.log('reproductions: ', reproductions.length);
              }*/
            } else {
              Meteor.call('workers.birthday', worker._id);
            }

            if (Math.random() < probReproduceDie.reproduce(city.scaleProbReproduce, worker.age)) {
              reproductions.push({ city: worker.city, role: worker.role });
              console.log('reproductions: ', reproductions.length);
            }

            while (Workers.find({ active: false }, { skip, limit }).count() > 0 && reproductions.length > 0) {
              const workerData = reproductions.pop();
              console.log(workerData);
              const workerSlot = Workers.findOne({ active: false }, { skip, limit });
              console.log(workerSlot);
              Meteor.call('workers.activate', workerSlot._id, workerData.city, workerData.role);
              console.log('reproductions: ', reproductions.length);
            }
        });
      });
    } catch (err) {
      console.log('please investigate if errors occour', err);
    }

    if (t >= 10) {
      instance.k_skip.set((skip + limit) % 10000);
      t = 0;
    }

}, 15000);  // update every few sec
});
