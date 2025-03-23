const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./event');

const Booking = sequelize.define('Booking', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
});

Booking.belongsTo(Event);
Event.hasMany(Booking);

module.exports = Booking;