const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer TOKEN

  if (!token) {
    return res.status(401).json({ status: 'Erro', message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const secret = process.env.SECRET;
    const decoded = jwt.verify(token, secret);

    // Anexa o usuário ao request para uso nas rotas protegidas
    req.user = decoded;

    next(); // prossegue para o controller
  } catch (err) {
    return res.status(403).json({ status: 'Erro', message: 'Token inválido ou expirado.' });
  }
}

module.exports = verifyToken;
