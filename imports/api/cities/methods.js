import { Meteor } from 'meteor/meteor';

import { Cities } from './cities.js';

Meteor.methods({
  'cities.update_wood': function (city, woodProduction) {
    check(this.userId, String);
    check(city, String);
    check(woodProduction, Number);

    Cities.update(city, { $inc: { wood: woodProduction } });
  },

  'cities.update_stone': function (city, stoneProduction) {
    check(this.userId, String);
    check(city, String);
    check(stoneProduction, Number);

    Cities.update(city, { $inc: { stone: stoneProduction } });
  },
});
