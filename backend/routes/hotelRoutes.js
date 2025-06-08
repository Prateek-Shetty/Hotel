
// routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const { getHotels, addHotel } = require('../controllers/hotelController');

router.get('/', getHotels);
router.post('/', addHotel);

module.exports = router;