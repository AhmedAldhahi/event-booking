const { Event } = require("../models");

// Controller for adding an event
exports.addEvent = async (req, res) => {
  try {
    const { name, date, location } = req.body;
    if (!name || !date || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newEvent = await Event.create({ name, date, location });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ error: error.message });
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

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Event ID is required" });
    }

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(400).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    console.error("Error fetching event: ", error);
    res.status(500).json({ error: "Server error while fetching event" });
  }
};
