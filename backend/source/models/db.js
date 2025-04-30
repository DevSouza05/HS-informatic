const mysql = require('mysql2');
const dotenv = require ('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE

});

connection.connect((err)=>{
if(err){
console.error('Erro ao conectar ao BDE:', err.message)
}else {
    console.log('Conectado ao BDE!!')
}
});

module.exports = connection;