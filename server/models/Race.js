// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const raceSchema = new Schema({
//   id: {
//     type: Number,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   course: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   raceDate: {
//     type: Date,
//     default: Date.now,
//     required: false,
//   },
//   distance: {
//     type: String,
//     required: false,
//     unique: true,
//     trim: true,
//   },
//   age: {
//     type: String,
//     required: false,
//     unique: true,
//     trim: true,
//   },
//   finished: {
//     type: Number,
//     required: false,
//     unique: true,
//     trim: true,
//   },
//   cancelled: {
//     type: Number,
//     required: false,
//     unique: true,
//     trim: true,
//   },
//   horses: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Horses',
//     },
//   ],
// });

// const Race = model('race', raceSchema);

// module.exports = Race;