const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  purhcaseDate: {
    type: Date,
    default: Date.now,
  },
  bets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bets'
    }
  ]
});

const Order = model('Order', orderSchema);

module.exports = Order;