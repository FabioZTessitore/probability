import { Meteor } from 'meteor/meteor';
import { Workers } from '../workers.js';

Meteor.publish('workers', function () {
  return Workers.find({ owner: this.userId });
});
