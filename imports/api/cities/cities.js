import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Cities = new Mongo.Collection('cities');

const CitySchema = new SimpleSchema({
  owner: {
    type: String,
  },

  name: {
    type: String,
    defaultValue: 'New City',
  },

  workers: {
    type: Number,
  },

  wood: {
    type: Number,
    defaultValue: 0,
  },

  stone: {
    type: Number,
    defaultValue: 0,
  },

  wood_production: {
    type: Number,
    defaultValue: 1,
  },

  stone_production: {
    type: Number,
    defaultValue: 1,
  },

  prob_storage_wood: {
    type: Number,
    defaultValue: .50,
    decimal: true,
  },

  prob_storage_stone: {
    type: Number,
    defaultValue: .50,
    decimal: true,
  },
});

Cities.attachSchema(CitySchema);
