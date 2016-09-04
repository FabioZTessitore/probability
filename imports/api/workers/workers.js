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
    decimal: true,
    autoValue: function () {
      return 1.02 - Math.exp(0.0002 * this.field('age').value);
    },
  },

  prob_die: {
    type: Number,
    decimal: true,
    autoValue: function () {
      return -1 + 0.05 + Math.exp(0.006 * this.field('age').value);
    },
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
