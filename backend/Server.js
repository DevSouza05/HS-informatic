const express = require('express');
const uuid = require('uuid');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (req, res) => {
  res.json("Bem-vindo à HS-Ware");
});

const users = [];


app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

 
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios!' });
  }


  const user = {
    id: uuid.v4(),
    name,
    email,
    password
  };

 
  users.push(user);


  return res.status(201).json(user);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
