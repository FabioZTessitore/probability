import { Meteor } from 'meteor/meteor';
import { Workers } from '../workers';

Meteor.publish('workers', function () {
  return Workers.find({ owner: this.userId });
});
