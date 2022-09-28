const User = require('../models/User');
const { createToken } = require('../middlewares/auth');

const getSignup = (req, res) => {
  res.status(200).render('signup');
};

const getLogin = (req, res) => {
  res.status(200).render('login');
};

const postSignup = async (req, res) => {
  const maxAge = 3 * 24 * 60 * 60;

  const user = await User.create(req.body);
  const token = createToken(user._id, maxAge);

  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(201).send({ user: user._id });
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  res.status(200).send({ user: user._id });
};

module.exports = {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
};
