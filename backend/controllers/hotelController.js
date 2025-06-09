const Hotel = require('../models/Hotel');

// GET /api/hotels
const getHotels = async (req, res) => {
  try {
    const search = req.query.search || "";
    const query = search ? { name: { $regex: search, $options: "i" } } : {};
    const hotels = await Hotel.find(query);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getHotels };
