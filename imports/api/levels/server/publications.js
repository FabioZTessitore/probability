import { Meteor } from 'meteor/meteor';
import { Levels } from '../levels.js';

Meteor.publish('levels', function () {
  return Levels.find();
});
