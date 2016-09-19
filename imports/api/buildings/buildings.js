import { Mongo } from 'meteor/mongo';

export const Buildings = new Mongo.Collection('buildings');

const BuildingSchema = new SimpleSchema({
  city: {
    type: String,
  },

  type: {
    type: String,
  },

  level: {
    type: Number,
    defaultValue: 0,
  },
});

Buildings.attachSchema(BuildingSchema);
