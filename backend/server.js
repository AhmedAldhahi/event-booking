const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
require('./models'); // Ensure models are initialized

const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingController'); // Import controller

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});

