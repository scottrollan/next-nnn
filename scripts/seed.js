const mongoose = require('mongoose');
const Plant = require('./mongoose/Plant');
const plants = require('./plantArray2.js');

mongoose.connect("mongodb://localhost/nearlyNative", { useNewUrlParser: true });


plants.forEach(plant => Plant.create(plant, (err) => { if(err){console.log(err)}}))
