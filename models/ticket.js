'use strict';

module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
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
    });
    Ticket.associate = models => {
        Ticket.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Ticket;
}