import { Meteor } from 'meteor/meteor';
import { Workers } from '../workers.js';

Meteor.publish('workersOfCity', function (cityId) {
  check(cityId, String);

  return Workers.find({ owner: this.userId, city: cityId });
});
