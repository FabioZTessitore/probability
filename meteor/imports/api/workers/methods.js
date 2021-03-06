import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { Workers } from './workers.js';

Meteor.methods({
  /*'workers.insert': function (owner, city, role) {
    check(this.userId, String);
    check(owner, String);
    check(city, String);

    Workers.insert({ owner, city, role });
  },

  'workers.remove': function (workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.remove(workerId);
  },*/

  'workers.activate': function (city, role) {
    check(this.userId, String);
    check(city, String);
    check(role, String);

    const worker = Workers.findOne({ active: false });
    if (worker) {
      Workers.update(worker._id, { $set: { active: true, city, age: 20, role } });
    }
  },

  'workers.deactivate': function (workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.update(workerId, { $set: { active: false } });
  },

  'workers.birthday': function (workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.update(workerId, { $inc: { age: 1 } });
  },

  'workers.role': function (workerId, role) {
    check(this.userId, String);
    check(workerId, String);
    check(role, String);

    Workers.update(workerId, { $set: { role } });
  },

  'workers.move': function (workerId, owner, city) {
    check(this.userId, String);
    check(workerId, String);
    check(owner, String);
    check(city, String);

    Workers.update(workerId, { $set: { owner, city } });
  },
});
