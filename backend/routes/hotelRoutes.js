
const express = require('express');
const router = express.Router();

const { createHotel, getAllHotels } = require('../controllers/hotelController');

// Define routes
router.post('/', createHotel);
router.get('/', getAllHotels);

module.exports = router;
