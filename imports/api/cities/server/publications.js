import { Meteor } from 'meteor/meteor';
import { Cities } from '../cities.js';

Meteor.publish('cities', function () {
  return Cities.find({ owner: this.userId });
});

Meteor.publish('city', function(cityId) {
  check(cityId, String);
  return Cities.find({ owner: this.userId, _id: cityId });
});
