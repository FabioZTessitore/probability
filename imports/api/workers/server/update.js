import { Meteor } from 'meteor/meteor';

import { Cities } from '../../cities/cities.js';
import { Workers } from '../workers.js';

Meteor.setInterval(function () {
  const workers = Workers.find().fetch();
  _(workers).forEach(function (worker) {
    if (Math.random() < worker.prob_reproduce) {
      Workers.insert({ owner: worker.owner, city: worker.city, role: worker.role });
      Cities.update(worker.city, { $inc: { workers: 1 }});
    }

    if (Math.random() < worker.prob_die) {
      Cities.update(worker.city, { $inc: { workers: -1 }});
      Workers.remove(worker._id);
    }
  });
//}, 5 * 60 * 1000);  // update every 5 min
}, 3000);  // update every 5 min
