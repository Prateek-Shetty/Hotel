import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  isAvailable: Boolean,
  calories: Number,
  vegetarian: Boolean,
  vegan: Boolean,
  spiceLevel: Number,
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;