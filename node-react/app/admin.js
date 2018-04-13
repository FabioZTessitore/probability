/*
const express = require('express');
const Map = require('./models/map');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.get('/admin', authUtils.isAdmin, function (req, res) {
    Map.find().sort({ name: 1 }).exec( function (err, result) {
      res.render('admin/home', {
        maps: result
      });
    });
  });

  router.post('/create-map', authUtils.isAdmin, function (req, res) {
    if (!req.body.mapName || 
      !req.body.mapWidth ||
      !req.body.mapHeight) {

      res.json({
        "success": false,
        "message": 'All data are required',
      });

      return;
    }

    const map = new Map({
      name: req.body.mapName,
      width: req.body.mapWidth,
      height: req.body.mapHeight,
    });
    map.save().then( function () {
      res.json({
        "success": true,
      });
    });
  });

  return router;
};
*/
