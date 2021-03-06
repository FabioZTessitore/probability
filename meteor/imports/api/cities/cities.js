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

  scaleProbReproduce: {   /* min: 1, max: 35 */
    type: Number,
    defaultValue: 1,
  },

  scaleProbDie: {   /* min: 1, max: 35 */
    type: Number,
    defaultValue: 25,
  },

  woodProbProduction: {
    type: Number,
    decimal: true,
    defaultValue: 0.10,
  },

  stoneProbProduction: {
    type: Number,
    decimal: true,
    defaultValue: 0.10,
  },

  woodStored: {
    type: Number,
    defaultValue: 0,
  },

  stoneStored: {
    type: Number,
    defaultValue: 0,
  },

  woodProductionQty: {
    type: Number,
    defaultValue: 1,
  },

  stoneProductionQty: {
    type: Number,
    defaultValue: 1,
  },

  woodProbStorage: {
    type: Number,
    decimal: true,
    defaultValue: .50,
  },

  stoneProbStorage: {
    type: Number,
    decimal: true,
    defaultValue: .50,
  },
});

Cities.attachSchema(CitySchema);
