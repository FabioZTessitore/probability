import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Workers = new Mongo.Collection('workers');

const probReproduce = function(scale, age) {
  return scale * Math.exp((100-age)/100);
};

const probDie = function(scale, age) {
  return scale * Math.exp(age/100);
};


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

  scaleProbReproduce: {   /* min: 1, max: 35 */
    type: Number,
    defaultValue: 1,
  },

  scaleProbDie: {   /* min: 1, max: 35 */
    type: Number,
    defaultValue: 35,
  },

  prob_reproduce: {
    type: Number,
    decimal: true,
    autoValue: function () {
      return probReproduce(this.field('scaleProbReproduce').value, this.field('age').value);
    },
  },

  prob_die: {
    type: Number,
    decimal: true,
    autoValue: function () {
      return probDie(this.field('scaleProbDie').value, this.field('age').value);
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
