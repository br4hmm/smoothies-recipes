const { Router } = require('express');
const router = Router();

const {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
  logOut,
} = require('../controllers/auth');

router.route('/signup').get(getSignup).post(postSignup);

router.route('/login').get(getLogin).post(postLogin);

router.route('/logout').get(logOut);

module.exports = router;
