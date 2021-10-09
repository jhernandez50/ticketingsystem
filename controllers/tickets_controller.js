const db = require("../models");

exports.index = (req, res) => {
    db.Ticket.findAll({
        where: {
            CustomerId: req.customer.id,
        },
    })
    .then((dbTicket) => {
        res.render("tickets/tickets", {
            layout: "main-tickets",
            ticket: dbTicket,
        });
    })
    .catch((err) => {
        console.log("No open issues");
        res.render("tickets/tickets", {
            layout: "main-tickets",
            ticket: [],
        });
    });
};

exports.createTicket = (req, res) => {
    req.body.CustomerId= req.customer.id;

    db.Ticket.create(req.body).then((dbPost) => res.json(dbPost));
}