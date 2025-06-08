
// controllers/hotelController.js
const Hotel = require('../models/Hotel');

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
};

exports.addHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add hotel' });
  }
};