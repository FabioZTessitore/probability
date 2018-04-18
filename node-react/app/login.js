const express = require('express');
const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function (passport) {

  // signin request
  router.post('/signin', authUtils.checkEmail, function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
      console.log('err', err);
      console.log('user', user);
      console.log('info', info);

      res.json({"success": false});
    })(req, res, next);
  });
  

  // signup request
  router.post('/signup', authUtils.checkEmail, authUtils.checkPassword, function (req, res, next) {
    console.log('body', req.body);

    passport.authenticate('local-signup', function (err, user, info) {

      console.log(err);
      console.log(user);
      console.log(info);

      if (err) {
        res.json({
          success: false,
          message: 'Fatal Error'
        });
        return;
      }

      if (!user) {
        res.json({
          success: false,
          message: 'Email already in use'
        });
        return;
      }

      res.json({
        success: true
      });
    })(req, res, next);
  });

  // logout request
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};
