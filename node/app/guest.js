const express = require('express');
const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  // Landing Page
  router.get('/', function (req, res) {
    res.send('landing page');
    /*
    res.render('index.ejs', {
      login: authUtils.boolIsLoggedIn(req),
      role: authUtils.role(req),
    });
    */
  });

  // Sign In e Sign Up
  // Nel caso di utenti gia' loggati
  // le pagine risultano irraggiungibili

  // Sign In Page
  /*
  router.get('/signin', function (req, res) {
    const loggedIn = authUtils.boolIsLoggedIn(req);
    
    if (loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('signin.ejs', {
      login: loggedIn,
      message: req.flash('loginMessage'),
      role: authUtils.role(req),
    });
  });
  */

  // Sign Up Page
  /*
  router.get('/signup', function (req, res) {
    const loggedIn = authUtils.boolIsLoggedIn(req);
    
    if (loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('signup.ejs', {
      login: loggedIn,
      message: req.flash('signupMessage'),
      role: authUtils.role(req),
    });
  });
  */

  return router;
};
