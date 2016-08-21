import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
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
    let i;
    for (i = 0; i < 100; i++) {
      Workers.insert({ owner: userId });
    }

    return {
      _id: userId,
    };
  },
});
