const db = require('/backend/dao/Db.js');


const createUser = async (name, email, password) => {
  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return { id: result.insertId, name, email, password };
  } catch (error) {
    throw error;
  }
};


const getUserByEmail = async (email) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0]; 
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getUserByEmail };
