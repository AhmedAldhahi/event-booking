const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust if necessary

class Event extends Model {}

Event.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      // Add description field here
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Event",
  }
);

module.exports = Event;
