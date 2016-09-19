import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { Workers } from './workers.js';

Meteor.methods({
  'workers.insert': function (owner, city) {
    check(this.userId, String);
    check(owner, String);
    check(city, String);

    Workers.insert({ owner, city });
  },

  'workers.remove': function (workerId, city) {
    check(this.userId, String);
    check(workerId, String);
    check(city, String);

    Workers.remove(workerId);
  },

  'workers.birthday': function (workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.update(workerId, { $inc: { age: 1 } });
  },
});
