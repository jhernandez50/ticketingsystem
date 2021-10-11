const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ticket extends Model {}

Ticket.init(
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
  ticket_type: {
    type: DataTypes.STRING,
    allowNull: false
 },
  assigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false
 },
 customer_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "user",
        key: "id"
    }
},
itmember_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "user",
        key: "id"
    }
},


},
 {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ticket',
  }
);

module.exports = Ticket;
