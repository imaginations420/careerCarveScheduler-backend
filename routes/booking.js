const express = require('express');
const { createBooking, getAllBookings } = require('../controllers/bookingController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateToken, createBooking);
router.get('/', authenticateToken, getAllBookings);

module.exports = router;
