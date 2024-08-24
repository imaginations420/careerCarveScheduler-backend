const Mentor = require('../models/Mentor');

const getAllMentors = (req, res) => {
    Mentor.getAll((err, mentors) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch mentors' });
        res.json(mentors);
    });
};

module.exports = { getAllMentors };
