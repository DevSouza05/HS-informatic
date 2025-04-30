const db = require('../models/db');


exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const checkEmail = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(checkEmail, [email], (err, result) => {
    if (err) {
      return res.json({ status: 'Erro', message: 'Erro ao verificar o e-mail.' });
    }

    if (result.length > 0) {
      return res.json({ status: 'Erro', message: 'E-mail já cadastrado.' });
    }

    const sql = 'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err) => {
      if (err) {
        return res.json({ status: 'Erro', message: 'Erro ao cadastrar.' });
      }

      return res.json({ status: 'Sucesso', message: 'Usuário cadastrado com sucesso.' });
    });
  });
};


exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.json({ status: 'Erro', message: 'Erro no login.' });
    }

    if (result.length > 0) {
      return res.json({ status: 'Sucesso', message: 'Login realizado com sucesso.' });
    } else {
      return res.json({ status: 'Erro', message: 'E-mail ou senha inválidos.' });
    }
  });
};
