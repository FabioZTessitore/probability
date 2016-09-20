import { Meteor } from 'meteor/meteor';

import { UserPoints } from './userpoints.js';
import { Workers } from '../workers/workers.js';
import { Roles } from '../roles/roles.js';

Meteor.methods({
  'userpoints.init': function(userId) {
    check(userId, String);

    UserPoints.insert({ userId, points: 0 });
  },

  'userpoints.calculate': function() {
    check(this.userId, String);

    const roles = Roles.find().fetch();
    const workers = Workers.find({ owner: this.userId }).fetch();

    let roles_points = {};
    _.forEach(roles, function(role) {
      roles_points[role.role] = role.points;
    });
    let points = 0;
    _.forEach(workers, function(worker) {
      points += roles_points[worker.role];
    });

    const upid = UserPoints.findOne({ userId: this.userId });
    UserPoints.update(upid, { $set: { points } });

    return {
      points
    };
  },
});
