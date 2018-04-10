import { Meteor } from 'meteor/meteor';
import { UserPoints } from '../userpoints.js';

Meteor.publish('userpoints', function () {
  check(this.userId, String);

  return UserPoints.find({ userId: this.userId });
});
