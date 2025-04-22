"use strict";

const express = require("express");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/Home", (req, res) => {
  res.send("Welcome to Hsti!");
});

app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  const checkEmail = `SELECT * FROM usuarios WHERE email = ?`;

  db.query(checkEmail, [email], (err, result) =>{
    if(err) return res.json({status:'Erro', message:'Erro ao verificar o e-mail.'});

    if(result.length > 0){
      return res.json({status: 'Erro', message:'e-mail já cadastrado'});
    }

    const sql = 'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)';

    db.query(sql, [name, email, password], (err, result) => {
      if (err) return res.json({ status: 'Erro', message: 'Erro ao cadastrar.' });

      return res.json({ status: 'Sucesso', message: 'Usuário cadastrado com sucesso.' });
    });
  });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.json({ status: 'Erro', message: 'Erro no login.' });

    if (result.length > 0) {
      return res.json({ status: 'Sucesso', message: 'Login realizado com sucesso.' });
    } else {
      return res.json({ status: 'Erro', message: 'E-mail ou senha inválidos.' });
    }
  });
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

