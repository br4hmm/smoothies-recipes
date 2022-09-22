const errorHandler = (err, req, res, next) => {
  const errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'Email is already registered!';
  }

  // mongoose validation errors
  if (err.message.includes('User validation failed:')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  res.status(500).send(errors);
};

module.exports = errorHandler;
