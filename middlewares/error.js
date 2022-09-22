const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({ msg: 'Something went wrong!' });
};

module.exports = errorHandler;
