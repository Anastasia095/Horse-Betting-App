const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
const betSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
  },
  horse: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Bets = model('Bets', betSchema);

module.exports = Bets;