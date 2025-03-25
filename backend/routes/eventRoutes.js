const express = require('express');
const { getAllEvents, addEvent, getEventById } = require("../controllers/eventController");
const router = express.Router();

router.get('/', getAllEvents);
router.post('/', addEvent);
router.get('/:id', getEventById);


module.exports = router;