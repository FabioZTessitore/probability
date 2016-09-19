import { Meteor } from 'meteor/meteor';
import { Levels } from '../levels.js';

Meteor.publish('levels', function (buildingType, buildingLevel) {
  check(buildingType, String);
  check(buildingLevel, Number);

  return Levels.find({ buildingType, buildingLevel });
});
