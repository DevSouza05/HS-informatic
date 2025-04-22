"use strict"

const express = require('express');
const db = require('./db')
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());


const port = process.env.PORT || 5000;

app.get('/Home', (req,res)=>{
    res.send('Welcome to Hsti!')
})

app.get('/Usuarios', (req,res)=>{
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          return res.status(500).json({ erro: err.message });
        }
        res.json(results);
      });
})


app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })