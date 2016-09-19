import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Levels = new Mongo.Collection('levels');

const LevelSchema = new SimpleSchema({
  buildingType: {
    type: String,
  },

  buildingLevel: {
    type: Number,
  },

  stoneNeededToBuild: {
    type: Number,
  },

  woodNeededToBuild: {
    type: Number,
  },

  changeScaleProbReproduce: {
    type: Number,
    defaultValue: 0,
  },

  changeScaleProbDie: {
    type: Number,
    defaultValue: 0,
  },

  changeScaleProbProduceWood: {
    type: Number,
    defaultValue: 0,
  },

  changeScaleProbProduceStone: {
    type: Number,
    defaultValue: 0,
  },

  changeScaleProbStorageWood: {
    type: Number,
    defaultValue: 0,
  },

  changeScaleProbStorageStone: {
    type: Number,
    defaultValue: 0,
  },
});

Levels.attachSchema(LevelSchema);
