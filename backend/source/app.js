const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/home', (req, res) => {
  res.send('Welcome to Hsti!');
});


app.use('/', userRoutes);

module.exports = app;
