import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Levels } from '../../../api/levels/levels.js';
import { Workers } from '../../../api/workers/workers.js';

import './city.html';

Template.City.onCreated(function () {
  const _this = this;
  const cityId = FlowRouter.getParam('id');

  _this.autorun(function () {
    Meteor.subscribe('city', cityId);
    Meteor.subscribe('buildings');
    Meteor.subscribe('levels');
  });
});

Template.City.helpers({
  city() {
    const cityId = FlowRouter.getParam('id');
    return Cities.findOne(cityId);
  }
});

Template.City.events({
  'click .city-hall': function (event, instance) {
    const cityId = FlowRouter.getParam('id');
    const city = Cities.findOne(cityId);

    const cityHall = Buildings.findOne({ city: cityId });
    const actualLevel = cityHall.level;
    const nextLevel = actualLevel + 1;

    const level = Levels.findOne({ type: 'City Hall', level: nextLevel });

    const woodNeeded = level.wood;
    const stoneNeeded = level.stone;

    if (city.wood > woodNeeded && city.stone > stoneNeeded) {
      console.log('risorse sufficienti');
      console.log(city);
      console.log(level);

      // fai gli upgrade
      Meteor.call('cities.update_stone', cityId, -stoneNeeded);
      Meteor.call('cities.update_wood', cityId, -woodNeeded);

      const workers = Workers.find({ city: cityId }).fetch();
      _(workers).forEach(function (worker) {
        // debug purpose
        // bisogna modifica lo schema dei workers
        // e inserire dei parametri modificabili
        // sembra abbastanza difficile
        // piu' semplice potrebbe essere
        // modificare il calcolo delle prob per chi
        // supera una certa eta'
        Meteor.call('workers.updateProbReproduceDie', worker._id, /*level.prob_reproduce*/ 0.5, level.prob_die);
      });
    }
  },
})