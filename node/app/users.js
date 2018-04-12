const express = require('express');
const Map = require('./models/map');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.get('/home', authUtils.isLoggedIn, function (req, res) {
    if (authUtils.role(req) === 'admin') {
      res.redirect('/admin');
      return;
    }

    Map.find().sort({ name: 1 }).exec( function (err, result) {
      res.render('users/home', {
        maps: result
      });
    });
  });

  router.get('/home/:mapId', authUtils.isLoggedIn, function (req, res) {
      res.render('users/map');
  });

  return router;
};
