const { Router } = require('express');
const router = Router();

const {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
} = require('../controllers/auth');

router.route('/signup').get(getSignup).post(postSignup);

router.route('/login').get(getLogin).post(postLogin);

module.exports = router;
