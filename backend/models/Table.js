import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true
  },
  guestName: String,
  reservationDate: String,
  price: Number
});

const Table = mongoose.model('Table', TableSchema);
export default Table;
