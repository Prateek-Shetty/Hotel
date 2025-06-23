import express from 'express';
import Table from '../models/Table.js';

const router = express.Router();

// GET Tables Page
router.get('/', async (req, res) => {
  const tables = await Table.find();
  res.render('table', { tables });
});

// POST New Table Reservation
router.post('/', async (req, res) => {
  const { tableNumber, guestName, reservationDate, price } = req.body;
  const newTable = new Table({ tableNumber, guestName, reservationDate, price });
  await newTable.save();
  res.redirect('/tables');
});

export default router;
