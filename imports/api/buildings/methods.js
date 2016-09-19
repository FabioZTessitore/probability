import { Meteor } from 'meteor/meteor';

import { Buildings } from './buildings.js';

Meteor.methods({
  'buildings.insert': function (cityId, type) {
    check(this.userId, String);
    check(cityId, String);
    check(type, String);

    Buildings.insert({ city: cityId, type: type });
  },

  'buildings.upgrade': function (buildingId) {
    check(this.userId, String);
    check(buildingId, String);

    // Inserire controllo su massimo livello raggiungibile
    Buildings.upgrade(buildingId, { $inc: { level: 1 } });
  },

  'buildings.downgrade': function (buildingId) {
    check(this.userId, String);
    check(buildingId, String);

    // Inserire controllo su minimo livello raggiungibile (0)
    Buildings.upgrade(buildingId, { $inc: { level: -1 } });
  },
});
