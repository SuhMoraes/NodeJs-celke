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
})

// Cadastrando o Usuário
connection.query("INSERT INTO users(nome, email) VALUES ('Márcio', 'marcio@gmail.com')", function(err, result){
  if(!err) {
    console.log('Usuario cadastrado com sucesso');
  } else {
    console.log('Erro ao cadastrar o usuario');
  }
});

// Cadastrando contas
connection.query("INSERT INTO contas_pagars(nome, valor) VALUES('Agua', '150')", function(err ,result){
  if(!err) {
    console.log('Contas cadastrado com sucesso!');
  }else {
    console.log('Erro ao cadastrar Contas.' ,err);
  }
});