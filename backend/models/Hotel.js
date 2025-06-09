// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  mapsLink: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  images: [{ type: String, required: true }],
  amenities: [{ type: String, required: true }],
  roomTypes: [{ type: String, required: true }],
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
