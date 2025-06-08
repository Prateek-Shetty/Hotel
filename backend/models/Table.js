// models/Table.js
const tableSchema = new mongoose.Schema({
  number: Number,
  capacity: Number,
  status: { type: String, default: 'available' },
});
module.exports = mongoose.model('Table', tableSchema);
