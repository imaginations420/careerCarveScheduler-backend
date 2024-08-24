const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'your_secret_key';

const register = (req, res) => {
    const { email, password, role } = req.body;

    User.create(email, password, role, (err) => {
        if (err) return res.status(500).json({ error: 'User registration failed' });

        const token = jwt.sign({ email, role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err || !user) return res.status(400).json({ error: 'Invalid credentials' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) return res.status(400).json({ error: 'Invalid credentials' });

            const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

module.exports = { register, login };
