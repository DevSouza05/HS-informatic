const mysql = require('mysql2');

const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password: '159753',
    database:'hsware'

});

connection.connect((err)=>{
if(err){
console.error('Erro ao conectar ao BDE:', err.message)
}else {
    console.log('Conectado ao BDE!!')
}
});

module.exports = connection;