import { Meteor } from 'meteor/meteor';

import { Cities } from './cities.js';
import { Workers } from '../workers/workers.js';
import { Buildings } from '../buildings/buildings.js';

Meteor.methods({
  'cities.create': function(userId) {
    check(userId, String);

    const initialWorkers = 10000;
    const firstCityId = Cities.insert({ owner: userId });
    let i;
    for (i = 0; i < initialWorkers; i++) {
      Workers.insert({ owner: userId, city: firstCityId, role: 'Harvester' });
    }
    Buildings.insert({ city: firstCityId, type: 'City Hall', level: 0 });
  },

  'cities.rename': function(city, newName) {
    check(this.userId, String);
    check(city, String);
    check(newName, String);

    Cities.update(city, { set: { name: newName } });
  },

  'cities.updateWoodStored': function (city, woodQty) {
    check(this.userId, String);
    check(city, String);
    check(woodQty, Number);

    Cities.update(city, { $inc: { woodStored: woodQty } });
  },

  'cities.updateStoneStored': function (city, stoneQty) {
    check(this.userId, String);
    check(city, String);
    check(stoneQty, Number);

    Cities.update(city, { $inc: { stoneStored: stoneQty } });
  },

  'cities.updateScaleProbReproduceDie': function(city, scaleReproduceChange, scaleDieChange) {
    check(this.userId, String);
    check(city, String);
    check(scaleReproduceChange, Number);
    check(scaleDieChange, Number);

    Cities.update(city, { $inc: { scaleProbReproduce: scaleReproduceChange, scaleProbDie: scaleDieChange } });
  },

  'cities.updateWoodProbProduction': function(city, probChange) {
    check(this.userId, String);
    check(city, String);
    check(probChange, Number);

    Cities.update(city, { $inc: { woodProbProduction: probChange } });
  },

  'cities.updateStoneProbProduction': function(city, probChange) {
    check(this.userId, String);
    check(city, String);
    check(probChange, Number);

    Cities.update(city, { $inc: { stoneProbProduction: probChange } });
  },

  'cities.updateWoodProductionQty': function(city, qtyChange) {
    check(this.userId, String);
    check(city, String);
    check(qtyChange, Number);

    Cities.update(city, { $inc: { woodProductionQty: qtyChange } });
  },

  'cities.updateStoneProductionQty': function(city, qtyChange) {
    check(this.userId, String);
    check(city, String);
    check(qtyChange, Number);

    Cities.update(city, { $inc: { stoneProductionQty: qtyChange } });
  },

  'cities.updateWoodProbStorage': function(city, probChange) {
    check(this.userId, String);
    check(city, String);
    check(probChange, Number);

    Cities.update(city, { $inc: { woodProbStorage: probChange } });
  },

  'cities.updateStoneProbStorage': function(city, probChange) {
    check(this.userId, String);
    check(city, String);
    check(probChange, Number);

    Cities.update(city, { $inc: { stoneProbStorage: probChange } });
  },
});
