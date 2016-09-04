import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Cities } from '../cities/cities.js';
import { Workers } from '../workers/workers.js';
import { Buildings } from '../buildings/buildings.js';

Meteor.methods({
  'users.register': function (userAttributes) {
    check(userAttributes, {
      username: String,
      password: String,
    });

    const sameUsername = Meteor.users.findOne({ username: userAttributes.username });
    if (sameUsername) {
      throw new Meteor.Error('invalid', 'invalid username');
    }

    const userId = Accounts.createUser(userAttributes);
    const initialWorkers = 1000;
    const firstCityId = Cities.insert({ owner: userId, workers: initialWorkers });
    let i;
    for (i = 0; i < initialWorkers; i++) {
      Workers.insert({ owner: userId, city: firstCityId });
    }
    Buildings.insert({ city: firstCityId, type: 'City Hall', level: 0 });

    return {
      _id: userId,
    };
  },
});
