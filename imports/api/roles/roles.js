import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Roles = new Mongo.Collection('roles');

const RoleSchema = new SimpleSchema({
  role: {
    type: String,
  },

  points: {
    type: Number,
  },
});

Roles.attachSchema(RoleSchema);
