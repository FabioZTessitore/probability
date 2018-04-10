const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const bluebird = require('bluebird');
const flash = require('connect-flash');

const routesGuest = require('./app/guest.js');

const app = express();

app.use('/css', express.static( path.resolve( __dirname, 'css' ) ) );

mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:32768', function (err) {
  if (err) {
    process.exit(1);
  }

  app.listen(3000);
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

app.use( routesGuest() );

app.use( function (req, res) {
  res.status(404);
  res.send('page not found');
});