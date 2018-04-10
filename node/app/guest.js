const express = require('express');
const path = require('path');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  // Landing Page and Sign In Page
  //
  // Already logged in user cannot
  // reach these pages

  // Landing Page (with Sign Up form)
  router.get('/', function (req, res) {
    res.sendFile( path.resolve( __dirname, '..', 'public', 'index.html' ) );
  });

  // Sign In Page
  router.get('/signin', function (req, res) {
    /*
    const loggedIn = authUtils.boolIsLoggedIn(req);
    
    if (loggedIn) {
      res.redirect('/home');
      return;
    }
    */
    res.sendFile( path.resolve( __dirname, '..', 'public', 'signin.html' ) );
    /*
    res.render('signin.ejs', {
      login: loggedIn,
      message: req.flash('loginMessage'),
      role: authUtils.role(req),
    });
    */
  });

  return router;
};
