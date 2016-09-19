import { Meteor } from 'meteor/meteor';
import { Buildings } from '../buildings.js';

Meteor.publish('buildings', function (city) {
  check(city, String);

  return Buildings.find({ city });
});
