"use strict"

const express = require('express');
const db = require('./db')
const app = express();

app.use(express.json());


const port = process.env.port || 5000;

app.get('/Home', (req,res)=>{
    res.send('Welcome this Hsti!')
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
    console.log(`Example app listening on port ${port}`)
  })