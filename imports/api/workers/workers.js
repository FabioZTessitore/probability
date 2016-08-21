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
});

Workers.attachSchema(WorkerSchema);
