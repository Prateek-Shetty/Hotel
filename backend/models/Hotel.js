import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
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
  }
});

const Hotel = mongoose.model('Hotel', HotelSchema);
export default Hotel;
