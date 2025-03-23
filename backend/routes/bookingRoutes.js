const express = require('express');
const { bookEvent } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', bookEvent);


module.exports = router;