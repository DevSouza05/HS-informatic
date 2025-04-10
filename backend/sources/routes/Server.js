const express = require('express');
const morgan = require('morgan');
const dotenv =require('dotenv')

dotenv.config()
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); 

app.use(morgan('dev'))


app.get('/Home', (req, res) => {
  res.status(200).send("Bem-vindo à HS-Ware");
});


app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios!' });
  }

  
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: 'Usuário já existe com esse e-mail!' });
  }

  try {

    const newUser = await createUser(name, email, password);
    return res.status(201).json(newUser); 
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor. Tente novamente.' });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
