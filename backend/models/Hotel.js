const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  mapsLink: String,
  link: String,
  description: String,
  rating: Number,
  collection: String,
  pricePerNight: {
    currency: String,
    Deluxe: Number,
    Executive: Number,
    Suite: Number
  },
  images: [String],
  amenities: [String],
  roomTypes: [String]
});

module.exports = mongoose.model('Hotel', hotelSchema);
