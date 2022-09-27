require('dotenv').config();
require('express-async-errors');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(port, console.log(`Server is listening on port ${port}...`));
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => res.status(200).render('home'));
app.get('/smoothies', (req, res) => res.status(200).render('smoothies'));
app.use(authRoutes);

app.get('/set-cookie', (req, res) => {
  res.cookie('isLogin', false, {
    maxAge: 10000 * 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });
  res.send('done');
});

app.get('/get-cookie', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});

app.use(errorHandler);
app.use((req, res) => {
  res.status(404).render('404');
});
