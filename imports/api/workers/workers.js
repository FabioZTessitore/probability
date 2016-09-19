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

  age: {
    type: Number,
    defaultValue: 20,
  },
});

Workers.attachSchema(WorkerSchema);
