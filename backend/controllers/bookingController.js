const { Booking } = require("../models");

exports.bookEvent = async (req, res) => {
  try {
    const { name, email, phoneNumber, eventId } = req.body;

    console.log("Request body:", req.body);

    if (!name || !email || !phoneNumber || !eventId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const booking = await Booking.create({ name, email, phoneNumber, eventId });

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error booking event:", error.message);
    console.error(error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};
