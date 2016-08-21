import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Workers = new Mongo.Collection('workers');

const WorkerSchema = new SimpleSchema({
  owner: {
    type: String,
  },

  role: {
    type: String,
    defaultValue: 'harvester',
  },

  prob_reproduce: {
    type: Number,
    defaultValue: 0.02,
    decimal: true,
  },

  prob_die: {
    type: Number,
    defaultValue: 0.05,
    decimal: true,
  },
});

Workers.attachSchema(WorkerSchema);
