const utils = {
  /*
  checkPassword: function (req, res, next) {
    const passwd1 = req.body.password;
    const passwd2 = req.body.password2;
    if (passwd1 === passwd2) {
      return next();
    }

    req.flash('signupMessage', 'Le password non coincidono.')
    res.redirect('/app/signup');
  },

  boolIsLoggedIn: function (req) {
    return req.isAuthenticated();
  },

  isLoggedIn: function (req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/');
  },

  boolIsAdmin: function (req) {
    return req.isAuthenticated() && req.user.role==='admin';
  },

  isAdmin: function (req, res, next) {
    if (req.isAuthenticated() && req.user.role==='admin') return next();

    res.redirect('/');
  },

  role: function (req, res) {
    if (!this.boolIsLoggedIn(req)) return "guest";
    return req.user.role;
  },
  */

  /*
  checkLevel: function (req, res, next) {
    let level = req.body.level;

    if (parseInt(level, 10) === parseFloat(level, 10)) return next();

    res.redirect('/app/userhome/0');
  }
  */
};

module.exports = utils;