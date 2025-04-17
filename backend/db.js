const mysql = require('mysql2');
const dotenv = require ('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.host,
    user:process.env.user,
    password: process.env.password,
    database:process.env.database

});

connection.connect((err)=>{
if(err){
console.error('Erro ao conectar ao BDE:', err.message)
}else {
    console.log('Conectado ao BDE!!')
}
});

module.exports = connection;