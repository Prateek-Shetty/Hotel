// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
});
module.exports = mongoose.model('Hotel', hotelSchema);