require('dotenv').config();
//express
var express = require('express');
var app = express();

//controllers
const reserve = require('./controllers/reservationscontroller');
const user = require('./controllers/usercontroller');

//database
const sequelize = require('./db');
sequelize.sync({force: true});  //to drop tables ---> {force: true}
app.use(express.json());
app.use(require('./middleware/headers'));

//listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));


//Routes
app.use('/user', user);
app.use(require('./middleware/validate-session'));
app.use('/reserve', reserve);
