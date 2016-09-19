import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';

import './signup.html';

Template.Signup.onCreated(function () {
  this.errorRegister = new ReactiveDict();
});

Template.Signup.helpers({
  errorClass: function (field) {
    const instance = Template.instance();
    return !!instance.errorRegister.get(field) ? 'has-error' : '';
  },

  errorMessage: function (field) {
    const instance = Template.instance();
    return instance.errorRegister.get(field);
  },
});

Template.Signup.events({
  'submit form': function (e, instance) {
    e.preventDefault();

    const userAttributes = {
      username: e.target.username.value,
      password1: e.target.password1.value,
      password2: e.target.password2.value,
    };

    // validate userAttributes
    instance.errorRegister.set('username', '');
    instance.errorRegister.set('password1', '');
    instance.errorRegister.set('password2', '');
    instance.errorRegister.set('passwordMatch', '');

    if (!userAttributes.username)
      instance.errorRegister.set('username', 'Username required');
    if (userAttributes.username && userAttributes.username.length < 3)
      instance.errorRegister.set('username', 'Username must be at least 3 character');
    if (!userAttributes.password1)
      instance.errorRegister.set('password1', 'Password required');
    if (!userAttributes.password2)
      instance.errorRegister.set('password2', 'Repeat Password');
    if (userAttributes.password1 !== userAttributes.password2)
      instance.errorRegister.set('passwordMatch', 'Passwords must match');

    if (instance.errorRegister.get('username') ||
        instance.errorRegister.get('password1') ||
        instance.errorRegister.get('password2') ||
        instance.errorRegister.get('passwordMatch')) {
      return;
    }

    Meteor.call('users.register', {
      username: userAttributes.username,
      password: userAttributes.password1,
    }, function (err, result) {
      if (err) {
        console.log({ message: err.reason });
        return;
      }

      Meteor.loginWithPassword(userAttributes.username, userAttributes.password1, function() {
        Meteor.call('cities.create', result._id);
        FlowRouter.go('user-home');
      });
    });
  },
});
