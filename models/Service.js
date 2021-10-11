const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Service extends Model {}

Service.init(
  {
    // Ticket ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
      type: DataTypes.STRING,
      allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year_of_exp: {
    type: DataTypes.INTEGER,
    allowNull: false
 },
  service_type: {
    type: DataTypes.STRING,
    allowNull: false
 },
 member_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "user",
        key: "id"
    }
}},
 {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Service',
  }
);

module.exports = Service;
