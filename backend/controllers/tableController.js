import Table from '../models/Table.js';

// View tables
export const getTables = async (req, res) => {
  const tables = await Table.find();
  res.render('table', { tables });
};

// Create new table reservation
export const createTable = async (req, res) => {
  const { tableNumber, guestName, reservationDate, price } = req.body;
  const newTable = new Table({ tableNumber, guestName, reservationDate, price });
  await newTable.save();
  res.redirect('/tables');
};

// Calculate revenue
export const getRevenue = async (req, res) => {
  const tables = await Table.find();
  const revenue = tables.reduce((total, t) => total + (t.price || 0), 0);
  res.render('admin', { tables, revenue });
};
