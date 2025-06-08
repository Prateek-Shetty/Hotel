// models/Booking.js
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  date: String,
  nights: Number,
});
module.exports = mongoose.model('Booking', bookingSchema);