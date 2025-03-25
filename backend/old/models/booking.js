const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');  // Adjust with your DB config

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: false,  // Change this if you want to allow NULL for phone
  },
  booking_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'bookings',
  timestamps: true, // Automatically manages createdAt and updatedAt
  updatedAt: 'updatedAt',
});

Booking.associate = (models) => {
  Booking.belongsTo(models.Event, {
    foreignKey: 'event_id',
    targetKey: 'id',
  });
};

module.exports = Booking;
