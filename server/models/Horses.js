const mongoose = require('mongoose');

const { Schema } = mongoose;

const horseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  id: {
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
    type: Number,
    required: false,
  },
  non_runner: {
    type: Number,
    required: false,
  },
  form: {
    type: Number,
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
    type: Number,
    required: false,
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Horses = mongoose.model('Horses', horseSchema);

module.exports = Horses;