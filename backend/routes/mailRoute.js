const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/mailController');

router.route('/send-email').post(sendEmail)

module.exports = router;