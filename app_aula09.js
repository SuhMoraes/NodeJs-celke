// Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'suhailah',
    password: '123456',
    database: 'nodejs'
});

connection.connect(function (err){
  if(err) console.error('Erro ao realizar a conexão com BD: ' + err.stack);
  return;
});

// Apagando registro no banco de dados
connection.query("DELETE FROM users WhERE id = 0", function(err, result){
  if(!err) {
    console.log('Usuário apagado com sucesso!');
  } else {
    console.log('Erro ao apagar usuário!!', err);
  }
});

