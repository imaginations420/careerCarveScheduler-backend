const Booking = require('../models/Booking');

const createBooking = (req, res) => {
    const { user_id, mentor_id, date, time, duration } = req.body;

    Booking.create(user_id, mentor_id, date, time, duration, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to create booking' });
        res.status(201).json({ message: 'Booking created successfully' });
    });
};

const getAllBookings = (req, res) => {
    Booking.getAll((err, bookings) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch bookings' });
        res.json(bookings);
    });
};

module.exports = { createBooking, getAllBookings };
