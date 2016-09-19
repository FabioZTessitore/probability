import { Meteor } from 'meteor/meteor';

import { Cities } from './cities.js';

Meteor.methods({
  'cities.update_wood': function (city, woodQty) {
    check(this.userId, String);
    check(city, String);
    check(woodQty, Number);

    Cities.update(city, { $inc: { wood: woodQty } });
  },

  'cities.update_stone': function (city, stoneQty) {
    check(this.userId, String);
    check(city, String);
    check(stoneQty, Number);

    Cities.update(city, { $inc: { stone: stoneQty } });
  },
});
