const express = require('express');
const path = require('path');

const router = express.Router();

const authUtils = require('./auth_utils');

module.exports = function () {

  router.get('/admin', authUtils.isAdmin, function (req, res) {
    res.sendFile( path.resolve( __dirname, '..', 'public', 'admin', 'home.html' ) );
  });


  return router;
};
