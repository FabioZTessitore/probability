import { Meteor } from 'meteor/meteor';

import { Workers } from '../workers';

Meteor.setInterval(function () {
  const workers = Workers.find().fetch();
  _(workers).forEach(function (worker) {
    if (Math.random() < worker.prob_reproduce) {
      Workers.insert({ owner: worker.owner });
    }

    if (Math.random() < worker.prob_die) {
      Workers.remove(worker._id);
    }
  });
}, 5 * 60 * 1000);  // update every 5 min
