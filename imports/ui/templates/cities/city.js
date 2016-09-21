import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';
//import { Buildings } from '../../../api/buildings/buildings.js';
//import { Levels } from '../../../api/levels/levels.js';
import { Workers } from '../../../api/workers/workers.js';

import './city.html';

Template.City.onCreated(function () {
  const _this = this;
  const cityId = FlowRouter.getParam('id');

  _this.autorun(function () {
    _this.subscribe('city', cityId);
    //_this.subscribe('buildings');
    //_this.subscribe('levels');
    _this.subscribe('workersOfCity', cityId);
  });
});

Template.City.helpers({
  city() {
    const cityId = FlowRouter.getParam('id');
    
    return Cities.findOne(cityId);
  },

  workers() {
    const cityId = FlowRouter.getParam('id');

    return Workers.find({ city: cityId, active: true }).count();
  },
});

Template.City.events({
  'click .city-hall': function (event, instance) {

    /* TRASFERIRE SUL SERVER GLI AGGIORNAMENTI DELLE COLLEZIONI */
    /* VEDI BUILDINGS.UPGRADE */

    /*const cityId = FlowRouter.getParam('id');
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
        Meteor.call('workers.updateProbReproduceDie', worker._id, level.changeProbReproduce, level.changeProbDie);
      });
    }*/
  },
})
