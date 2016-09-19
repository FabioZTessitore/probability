import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Levels = new Mongo.Collection('levels');

const LevelSchema = new SimpleSchema({
  type: {
    type: String,
  },

  level: {
    type: Number,
  },

  stone: {  /* needed to build */
    type: Number,
  },

  wood: {  /* needed to build */
    type: Number,
  },

  changeProbReproduce: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  changeProbDie: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  prob_wood: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  prob_stone: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  prob_storage_wood: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  prob_storage_stone: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },
});

Levels.attachSchema(LevelSchema);
