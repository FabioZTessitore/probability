import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

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

    return {
      _id: userId,
    };
  },
});
