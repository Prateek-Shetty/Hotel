import mongoose from "mongoose";

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
  }
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;