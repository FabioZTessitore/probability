import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cities } from '../../../api/cities/cities.js';
//import { Workers } from '../../../api/workers/workers.js';

import './user_home.html';

Template.UserHome.onCreated(function () {
  const _this = this;
  _this.autorun(function () {
    Meteor.subscribe('cities');
    //Meteor.subscribe('workers');
  });
});

Template.UserHome.helpers({
  username() {
    return Meteor.user().username;
  },
  
  cities() {
    return Cities.find();
  },

  numberOfWorkers() {
    //return Workers.find().count();
  },

  points() {
    //const workers = Workers.find().fetch();
    let points = 0;
    /*_(workers).forEach(function (worker) {
      if (worker.role === 'harvester') {
        points += 1;
      }
    });*/

    return points;
  }
});
