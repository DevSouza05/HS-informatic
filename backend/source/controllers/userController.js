const db = require('../models/db');
const dotenv = require ('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const checkEmail = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(checkEmail, [email], async (err, result) => {
    if (err) {
      return res.json({ status: 'Erro', message: 'Erro ao verificar o e-mail.' });
    }

    if (result.length > 0) {
      return res.json({ status: 'Erro', message: 'E-mail já cadastrado.' });
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const sql = 'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)';
      db.query(sql, [name, email, hashedPassword], (err) => {
        if (err) {
          return res.json({ status: 'Erro', message: 'Erro ao cadastrar.' });
        }

        return res.json({ status: 'Sucesso', message: 'Usuário cadastrado com sucesso.' });
      });

    } catch (err) {
      return res.status(500).json({ status: 'Erro', message: 'Erro ao processar a senha.' });
    }
  });
};


exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.json({ status: 'Erro', message: 'Erro no login.' });
    }

    if (result.length === 0) {
      return res.json({ status: 'Erro', message: 'E-mail ou senha inválidos.' });
    }

    const user = result[0];

    try {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.json({ status: 'Erro', message: 'E-mail ou senha inválidos.' });
      }

      const secret = process.env.SECRET;
      const token = jwt.sign(
        { id: user.id, email: user.email },
        secret,
        { expiresIn: '1h' }
      );

      res.status(200).json({
        status: 'Sucesso',
        message: 'Autenticação realizada com sucesso.',
        token: token,
      });

    } catch (err) {
      return res.status(500).json({ status: 'Erro', message: 'Erro ao validar a senha.' });
    }
  });
};
