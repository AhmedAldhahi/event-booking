const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const favicon = require("serve-favicon");
const db = require("./models"); // ✅ This replaces the old require

const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/seed", seedRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  try {
    await db.sequelize.authenticate(); // ✅ Sequelize CLI instance
    console.log("✅ Database connected.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
