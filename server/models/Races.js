const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const raceSchema = new Schema({
  age: {
    type: String,
    required: true,
  },
  canceled: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  finished: {
    type: Number,
    required: true,
  },
  id_race: {
    type: Number,
    required: true,
  },
});


const Races = model('Races', raceSchema);

module.exports = Races;
