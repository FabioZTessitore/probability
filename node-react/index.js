const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const bluebird = require('bluebird');
const flash = require('connect-flash');

const routesLogin = require('./app/login.js');

const app = express();

mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:32768/probability', function (err) {
  if (err) {
    process.exit(1);
  }

  app.listen(3001);
});

app.use( helmet() );

app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( session({
  secret: 'lDfwEiluFowj48rowroEjFiweruoicHur2hr2',
  saveUninitialized: true,
  resave: true
}) );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( flash() );

require( path.resolve( __dirname, 'config', 'passport.js' ) )(passport);

app.use( routesLogin(passport) );

app.use( function (req, res) {
  res.status(404);
  res.send('page not found');
});
/*

const routesGuest = require('./app/guest.js');
const routesUsers = require('./app/users.js');
const routesAdmin = require('./app/admin.js');
const routesGame = require('./app/game.js');

app.set( 'views', path.resolve( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use('/css', express.static( path.resolve( __dirname, 'css' ) ) );
app.use('/js', express.static( path.resolve( __dirname, 'js' ) ) );

app.use( routesGuest() );
app.use( routesUsers() );
app.use( routesAdmin() );
app.use( routesGame() );
*/
