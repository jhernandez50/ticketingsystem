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

   // Describe the request the customer needs
  ticket_description: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // Indicate if this is a Incident ticket or Request Ticket
  ticket_type: {
    type: DataTypes.STRING,
    allowNull: false
 },
  // Write how you solve the Incident or Rquest
  ticket_resolution: {
    type: DataTypes.STRING,
    allowNull: false
 },

 customer_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "customer",
        key: "id"
    }
},
itmember_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "itmember",
        key: "id"
    }

},


},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ticket',
  }
);

module.exports = Ticket;
