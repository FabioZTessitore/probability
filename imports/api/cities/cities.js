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
});

Cities.attachSchema(CitySchema);
