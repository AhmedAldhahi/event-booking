// bookingController.js
const { Booking, Event } = require('../models');

exports.bookEvent = async (req, res) => {
  try {
    const { name, email, phoneNumber, eventId } = req.body;
    const event = await Event.findByPk(eventId);

    if (!event) return res.status(404).json({ error: 'Event not found' });

    const booking = await Booking.create({ name, email, phoneNumber, EventId: eventId });
    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ error: 'Error booking event' });
  }
};
