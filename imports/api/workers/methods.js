import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { Workers } from './workers.js';

Meteor.methods({
  'workers.insert': function(owner) {
    check(this.userId, String);
    check(owner, String);

    Workers.insert({ owner });
  },

  'workers.remove': function(workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.remove(workerId);
  },
});
