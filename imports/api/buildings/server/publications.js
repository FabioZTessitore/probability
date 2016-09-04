import { Meteor } from 'meteor/meteor';
import { Buildings } from '../buildings.js';

Meteor.publish('buildings', function () {
  return Buildings.find();
});
