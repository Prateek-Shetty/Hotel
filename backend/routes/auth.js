import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { signup, login } from '../controllers/authController.js';
const router = express.Router();

// GET Signup Page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// POST Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.redirect('/auth/login');
});

// GET Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// POST Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send('Invalid credentials');

  // Admin check (hardcoded)
  if (email === 'admin@gmail.com') {
    return res.redirect('/admin');
  }

  res.redirect('/hotels');
});

router.post('/signup', signup);
router.post('/login', login);

export default router;
