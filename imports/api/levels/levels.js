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

  stone: {
    type: Number,
  },

  wood: {
    type: Number,
  },

  prob_reproduce: {
    type: Number,
    decimal: true,
    defaultValue: 0.0,
  },

  prob_die: {
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
