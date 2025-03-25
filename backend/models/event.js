const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust if necessary

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
      type: DataTypes.TEXT,
      allowNull: true, // Optional field
    },
  },
  {
    sequelize,
    modelName: "Event",
    timestamps: false, // Set to true if you want createdAt & updatedAt fields
  }
);

module.exports = Event;
