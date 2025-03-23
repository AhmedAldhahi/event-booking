const sequelize = require('../config/database');
const Event = require('./event');
const Booking = require('./booking');

sequelize.sync({ force: false }) // Set to 'false' to prevent data loss
  .then(() => console.log('Tables created'))
  .catch(err => console.log(err));

module.exports = { Event, Booking };