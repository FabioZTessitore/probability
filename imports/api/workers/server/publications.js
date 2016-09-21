import { Meteor } from 'meteor/meteor';
import { Workers } from '../workers.js';

Meteor.publish('workers', function (skip, limit) {
  check(skip, Number);
  check(limit, Number);

  return Workers.find({ owner: this.userId }, { skip, limit });
});

Meteor.publish('workersOfCity', function (cityId) {
  check(cityId, String);

  return Workers.find({ owner: this.userId, city: cityId });
});
