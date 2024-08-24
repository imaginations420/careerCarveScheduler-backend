const express = require('express');
const { getAllMentors } = require('../controllers/mentorController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.get('/', authenticateToken, getAllMentors);

module.exports = router;
