// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  number: String,
  type: String,
  price: Number,
});
module.exports = mongoose.model('Room', roomSchema);
