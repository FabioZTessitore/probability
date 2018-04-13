/*
const express = require('express');
const User = require('./models/user');
const Map = require('./models/map');
const City = require('./models/city');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.post('/create-city', authUtils.isLoggedIn, function (req, res) {
    console.log(req.user);
    if (!req.body.mapId || !req.body.cityName) {
      res.json({
        "success": false,
        "message": 'All data are required',
      });

      return;
    }

    const city = new City({
      mapId: req.body.mapId,
      name: req.body.cityName,
      owner: req.user._id,
    });
    city.save().then( function (result) {
      User.update({_id: req.user._id},
        {
          $inc: {
            credits: -50
          }
        }, function (err) {
          if (err) {
            console.log(err);
            // elimina la citta' creata
            // e segnala errore
          }
          res.json({
            "success": true,
            "id": result._id,
            "credits": -50+parseInt(req.user.credits, 10)
          });
        });
    });

  });

  return router;
};
*/
