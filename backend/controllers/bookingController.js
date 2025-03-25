const { log } = require("@angular-devkit/build-angular/src/builders/ssr-dev-server");
const { Booking, Event } = require("../models");

exports.bookEvent = async (req, res) => {
  try {
    const { name, email, phoneNumber, eventId } = req.body;

    console.log("Request body:", req.body); // Log the incoming data

    if (!name || !email || !phoneNumber || !eventId) {
      return res.status(400).json({ error: "All fields are required" });
    }


    // if (!phoneNumber) {
    //   return res.status(400).json({ error: "Phone number is required" });
    // }

    const booking = await Booking.create({ name, email, phoneNumber, event_id: eventId });

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error booking event:", error.message);
    console.error(error.stack); // This will provide a detailed error stack
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};
