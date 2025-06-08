
// routes/tableRoutes.js
const express = require('express');
const router = express.Router();
const { getTables, addTable } = require('../controllers/tableController');

router.get('/', getTables);
router.post('/', addTable);

module.exports = router;
