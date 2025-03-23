const { Event } = require("../models");

// Controller for adding an event
exports.addEvent = async (req, res) => {
  try {
    const { name, date, location } = req.body;
    const newEvent = await Event.create({ name, date, location });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    if (events.length === 0) {
      return res.status(404).json({ error: "No events found" });
    }
    res.json(events);
  } catch (err) {
    console.error("Error while fetching events:", err); // More detailed logging
    res.status(500).json({ error: "Error fetching events" });
  }
};
