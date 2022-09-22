const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(port, console.log(`Server is listening on port ${port}...`));
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => res.status(200).render('home'));
app.get('/smoothies', (req, res) => res.status(200).render('smoothies'));

app.use((req, res) => {
  res.status(404).render('404');
});
