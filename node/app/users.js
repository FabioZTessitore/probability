const express = require('express');
const User = require('./models/user');
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
        credits: req.user.credits,
        maps: result
      });
    });

  });

  router.get('/map/:mapId', authUtils.isLoggedIn, function (req, res) {
    Map.findOne({ _id: req.params.mapId }).exec( function (err, result) {
      res.json(result);
    });
  });

  return router;
};
