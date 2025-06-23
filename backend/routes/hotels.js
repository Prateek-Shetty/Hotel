import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const hotels = await Hotel.find();
  res.render('hotel', { hotels });
});

export default router;
