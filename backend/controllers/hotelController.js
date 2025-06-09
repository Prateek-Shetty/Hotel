const Hotel = require('../models/Hotel');

const createHotel = async (req, res) => {
  try {
    const {
      name,
      location,
      mapsLink,
      description,
      rating,
      images,
      amenities,
      roomTypes,
    } = req.body;

    const hotel = new Hotel({
      name,
      location,
      mapsLink,
      description,
      rating,
      images,
      amenities,
      roomTypes,
    });

    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
};
