import { Meteor } from 'meteor/meteor';
import { Roles } from '../roles.js';

Meteor.publish('roles', function () {
  return Roles.find();
});
