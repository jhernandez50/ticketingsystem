const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Customer extends Model {}

Customer.init(
  {
    // ID of the Customer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // Customer Name
  customer_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // Customer Address
  customer_address: {
    type: DataTypes.STRING,
    allowNull: false
 },
// Customer phone
  customer_phone: {
    type: DataTypes.INTEGER,
    allowNull: false
 }

},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Customer',
  }
);

module.exports = Customer;
