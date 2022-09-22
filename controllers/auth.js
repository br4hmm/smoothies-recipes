const getSignup = (req, res) => {
  res.status(200).render('signup');
};

const getLogin = (req, res) => {
  res.status(200).render('login');
};

const postSignup = (req, res) => {
  res.status(201).send(req.body);
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
