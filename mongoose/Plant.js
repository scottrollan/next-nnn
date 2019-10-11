const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
  quantity: String,
  price: Number,
})


const plantSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  zone: String,
  commonName: String,
  variety: String,
  regionalName: String,
  botanicalName: String,
  description: String,
  notes: String,
  soilPH: [String],
  soilType: [String],
  water: [String],
  sunlight: [String],
  foliage: [String],
  foliage: [String],
  image: String,
  amount: [priceSchema],
  purchaseNotes: [String],
})

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
