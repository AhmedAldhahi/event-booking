'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Associations
     */
    static associate(models) {
      Booking.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  Booking.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });

  return Booking;
};
