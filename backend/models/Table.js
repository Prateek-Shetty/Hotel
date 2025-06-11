import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNumber: Number,
  isUsed: Boolean,
  orders: [
    {
      item: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number
});

const Table = mongoose.model("Table", tableSchema);
export default Table;