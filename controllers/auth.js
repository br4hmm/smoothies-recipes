const User = require('../models/User');

const getSignup = (req, res) => {
  res.status(200).render('signup');
};

const getLogin = (req, res) => {
  res.status(200).render('login');
};

const postSignup = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
};

const postLogin = (req, res) => {
  res.status(201).send(req.body);
};

module.exports = {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
};

// add express async errors and make it work
// continue as the tutorial
