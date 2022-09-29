require('dotenv').config();
const jwt = require('jsonwebtoken');

// maxAge = 3 days
const maxAge = 3 * 24 * 60 * 60;

const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

const reqAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

module.exports = { maxAge, createToken, reqAuth };
