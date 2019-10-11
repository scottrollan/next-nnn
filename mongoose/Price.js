const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  quantity: String,
  price: Number,
})

module.exports = priceSchema;
// export const Price = mongoose.model('Price', priceSchema);
