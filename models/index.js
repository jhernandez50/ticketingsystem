// const Customer = require('./Customer');
// const Itmember = require('./Itmember');
const Ticket = require('./Ticket');
const User=require('./User');
const Service=require('./Service');
// Ticket belongsTo Customer
Ticket.belongsTo(User, {
  foreignKey: 'customer_id'
});

// Ticket belongsTo ItMember
Ticket.belongsTo(User, {
    foreignKey: 'itmember_id'
 });

// Customer have many Tickets
User.hasMany(Ticket, {
  as:'Customers'
});

Service.belongsTo(User, {
  foreignKey: 'member_id'
})
// Itmemer have many Tickets
// Itmember.hasMany(Ticket, {
  //   foreignKey: 'ticket_id'
  // });

// Products belongToMany Tags (through ProductTag)
/*
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});
*/

module.exports = {
  User,
  Ticket,
  Service
};