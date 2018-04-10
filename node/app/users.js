const express = require('express');
const path = require('path');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.get('/home', authUtils.isLoggedIn, function (req, res) {
    if (authUtils.role(req) === 'admin') {
      res.redirect('/admin');
      return;
    }

    res.sendFile( path.resolve( __dirname, '..', 'public', 'home.html' ) );
  });


  return router;
};
