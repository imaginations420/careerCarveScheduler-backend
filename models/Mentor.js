const db = require('../config/db');

const Mentor = {
    getAll: (callback) => {
        const query = `SELECT * FROM mentors`;
        db.all(query, [], callback);
    },

    create: (name, expertise, available_dates, callback) => {
        const query = `INSERT INTO mentors (name, expertise, available_dates) VALUES (?, ?, ?)`;
        db.run(query, [name, expertise, available_dates], callback);
    }
};

module.exports = Mentor;
