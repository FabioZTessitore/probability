const express = require('express');
const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function (passport) {

  // signin request
  /*
  router.post('/signin', authUtils.checkEmail, passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/signin',
    failureFlash: true
  }));
  */
  router.post('/signin', authUtils.checkEmail, passport.authenticate('local-login'), function (req, res) {
    console.log('user', req.user);
  });
  /*
  router.post('/signin', authUtils.checkEmail, function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
    console.log('err', err);
    console.log('user', user);
    console.log('info', info);
    })(req, res, next);
  });
  */

  // signup request
  /*
  router.post('/signup', authUtils.checkPassword, passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true,
  }));
  */
  router.post('/signup', authUtils.checkPassword, passport.authenticate('local-signup', function (err, user, info) {
    console.log('err', err);
    console.log('user', user);
    console.log('info', info);
  }));

  // logout request
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};
