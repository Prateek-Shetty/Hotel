// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  items: [String],
  total: Number,
  status: { type: String, default: 'pending' },
});
module.exports = mongoose.model('Order', orderSchema);
