const getSignup = (req, res) => {
  res.status(200).render('signup');
};

const getLogin = (req, res) => {
  res.status(200).render('login');
};

const postSignup = (req, res) => {
  res.status(201).send('Done Signup!');
};

const postLogin = (req, res) => {
  res.status(201).send('Done Login!');
};

module.exports = {
  getSignup,
  getLogin,
  postSignup,
  postLogin,
};
