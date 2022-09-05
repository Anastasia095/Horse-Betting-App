const { Schema, model } = require('mongoose');

const horseSchema = new Schema({
  horse: {
    type: String,
    required: false,
  },
  id_horse: {
    type: Number,
    required: false,
  },
  jockey: {
    type: String,
    required: false,
  },
  trainer: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
  number: {
    type: Number,
    required: false,
  },
  form: {
    type: String,
    required: false,
  },
  position: {
    type: Number,
    required: false,
  },
  distance_beaten: {
    type: String,
    required: false,
  },
  sp: {
    type: String,
    required: false,
  },
  id_race: {
    type: Number,
    required: false,
  },
});

const Horses = model('Horses', horseSchema);

module.exports = Horses;