require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (id, maxAge) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports = { createToken };
