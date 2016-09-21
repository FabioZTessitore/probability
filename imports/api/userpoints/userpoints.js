import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const UserPoints = new Mongo.Collection('userpoints');

const UserPointsSchema = new SimpleSchema({
  userId: {
    type: String,
  },

  points: {
    type: Number,
  },
});

UserPoints.attachSchema(UserPointsSchema);
