module.exports = app => {
    const tickets = require('./routes/tickets');

    app.use('/tickets', tickets);
}
