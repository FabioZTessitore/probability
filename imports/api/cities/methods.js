import { Meteor } from 'meteor/meteor';

import { Cities } from './cities.js';

Meteor.methods({
  'cities.update_wood': function (city, woodProduction) {
    check(this.userId, String);
    check(city, String);
    check(woodProduction, Number);

    Cities.update(city, { $inc: { wood: woodProduction } });
  },
});
