'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Define associations here
     */
    static associate(models) {
      Event.hasMany(models.Booking, { foreignKey: 'eventId' });
    }
  }

  Event.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};
