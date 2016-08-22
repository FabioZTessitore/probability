import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Cities } from '../cities/cities.js';
import { Workers } from '../workers/workers.js';

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
    const firstCityId = Cities.insert({ owner: userId, workers: 100 });
    let i;
    for (i = 0; i < 100; i++) {
      Workers.insert({ owner: userId, city: firstCityId });
    }

    return {
      _id: userId,
    };
  },
});
