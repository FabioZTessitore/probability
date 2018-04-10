const express = require('express');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  // Landing Page and Sign In Page
  //
  // Already logged in user cannot
  // reach these pages

  // Landing Page (with Sign Up form)
  router.get('/', authUtils.notLoggedIn, function (req, res) {
    res.render('index', {
      message: req.flash('signupMessage'),
    });
  });

  // Sign In Page
  router.get('/signin', authUtils.notLoggedIn, function (req, res) {
    res.render('signin', {
      message: req.flash('loginMessage'),
    });
  });

  return router;
};
