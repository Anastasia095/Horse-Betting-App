const mongoose = require('mongoose');

const { Schema } = mongoose;

const betSchema = new Schema({
  horse: {
    type: Schema.Types.ObjectId,
    ref: 'Horses',
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
});

const Bets = mongoose.model('Bets', betSchema);

module.exports = Bets;