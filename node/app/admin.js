const express = require('express');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.get('/admin', authUtils.isAdmin, function (req, res) {
    res.render('admin/home');
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

    const map = {
      mapName: req.body.mapName,
      mapWidth: req.body.mapWidth,
      mapHeight: req.body.mapHeight,
    };
    console.log(map);
    // inserire in db

    res.json({
      "success": true,
    });
  });

  return router;
};
