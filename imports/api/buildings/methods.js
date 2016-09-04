import { Meteor } from 'meteor/meteor';

import { Buildings } from './buildings.js';

Meteor.methods({
  'buildings.insert': function (cityId, type) {
    check(this.userId, String);
    check(cityId, String);
    check(type, String);

    Buildings.insert({ city: cityId, type: type });
  },
});
