const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const {addAdmin}=require('./config/admin.config');
//all routes
const commonRouter = require('./routes/common.route');
const userRouter = require('./routes/user.route');
const ticketRouter=require('./routes/ticket.route');
const serviceRouter=require('./routes/service.route');




const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// TODO: Add a comment describing the functionality of this object
const sess = {
  secret: 'my-secret',
  cookie: {},
  resave: true,
  rolling:true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// TODO: Add a comment describing the functionality of this statement
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
  res.locals.session = req.session;
  next();

})

app.use('/',commonRouter);
app.use('/user',userRouter);
app.use('/ticket',ticketRouter);
app.use('/service',serviceRouter);

addAdmin();
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App is listening on port:${PORT}`));
});
