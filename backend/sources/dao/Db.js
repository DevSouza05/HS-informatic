const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',  
  user: 'root',       
  password: '159753',      
  database: 'hsware',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


const promisePool = pool.promise();

module.exports = promisePool;
