import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';

import { Cities } from '../cities/cities.js';
import { Workers } from './workers.js';

Meteor.methods({
  'workers.insert': function (owner, city, role) {
    check(this.userId, String);
    check(owner, String);
    check(city, String);
    check(role, String);

    Workers.insert({ owner, city, role });
    Cities.update(city, { $inc: { workers: 1 } });
  },

  'workers.remove': function (workerId, city) {
    check(this.userId, String);
    check(workerId, String);
    check(city, String);

    Cities.update(city, { $inc: { workers: -1 } });
    Workers.remove(workerId);
  },

  'workers.birthday': function (workerId) {
    check(this.userId, String);
    check(workerId, String);

    Workers.update(workerId, { $inc: { age: 1 } });
  },

  'workers.updateProbReproduceDie': function(workerId, changeReproduce, changeDie) {
    check(this.userId, String);
    check(workerId, String);
    check(changeReproduce, Number);
    check(changeDie, Number);

    Workers.update(workerId, { $inc: { scaleProbReproduce: changeReproduce, scaleProbDie: changeDie }});
  }
});
