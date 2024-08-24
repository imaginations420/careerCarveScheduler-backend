const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    create: (email, password, role, callback) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return callback(err);
            const query = `INSERT INTO users (email, password, role) VALUES (?, ?, ?)`;
            db.run(query, [email, hash, role], callback);
        });
    },

    findByEmail: (email, callback) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        db.get(query, [email], callback);
    }
};

module.exports = User;
