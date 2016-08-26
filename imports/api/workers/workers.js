import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Workers = new Mongo.Collection('workers');

const WorkerSchema = new SimpleSchema({
  owner: {
    type: String,
  },

  city: {
    type: String,
  },

  role: {
    type: String,
    defaultValue: 'harvester',
  },

  age: {
    type: Number,
    defaultValue: 20,
  },

  prob_reproduce: {
    type: Number,
    autoValue: function () {
      return 0.02;
    },
    decimal: true,
  },

  prob_die: {
    type: Number,
    autoValue: function () {
      return 0.05;
    },
    decimal: true,
  },

  prob_wood: {
    type: Number,
    defaultValue: 0.10,
    decimal: true,
  },

  prob_stone: {
    type: Number,
    defaultValue: 0.10,
    decimal: true,
  },
});

Workers.attachSchema(WorkerSchema);
