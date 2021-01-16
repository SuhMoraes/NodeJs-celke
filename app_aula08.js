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

// Editando registro no banco de dados Mysql com Node
connection.query("UPDATE users SET nome = 'Flavia' WHERE id = 2", function(err, result){
  if(!err) {
    console.log('Usuário editado com sucesso!');
  } else {
    console.log('Erro!!', err);
  }
});

