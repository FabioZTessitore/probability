import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './login.html';

Template.Login.events({
  "submit form": function (e, instance) {
    e.preventDefault();

    const userAttributes = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    Meteor.loginWithPassword(userAttributes.username, userAttributes.password, function (err) {
      if (err) {
        console.log({ message: err.reason });
        return;
      }

      FlowRouter.go('user-home');
    });
  },
});
