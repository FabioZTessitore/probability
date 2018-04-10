const express = require('express');
const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function (passport) {

  // signin request
  router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/signin',
    failureFlash: true
  }));

  // signup request
  router.post('/signup', authUtils.checkPassword, passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true,
  }));

  // logout request
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};
