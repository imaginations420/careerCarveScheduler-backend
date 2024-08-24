const db = require('../config/db');

const Booking = {
    create: (user_id, mentor_id, date, time, duration, callback) => {
        const query = `INSERT INTO bookings (user_id, mentor_id, date, time, duration) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [user_id, mentor_id, date, time, duration], callback);
    },

    getAll: (callback) => {
        const query = `SELECT * FROM bookings`;
        db.all(query, [], callback);
    }
};

module.exports = Booking;
