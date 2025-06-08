// models/Room.js
const roomSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  number: String,
  type: String,
  price: Number,
});
module.exports = mongoose.model('Room', roomSchema);
