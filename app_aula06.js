// 1- Incluir um módulo
 const express = require("express");


 // 2 - Clonando todo o módulo e atribuindo para a variável
const app = express();

// Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'suhailah',
    password: '123456',
    database: 'nodejs'
});

connection.connect(function (err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


// Consulta com o banco de dados
connection.query('SELECT * FROM users', function (err, rows, fields){
    if(!err){
        console.log('Resultado : ', rows);
    } else {
        console.log("Erro ao realizar a consulta");
    }
})
 

// 4 - Indicando um página a qual quero a abrir
app.get("/", function(req,res){ // Para abrir o arquivo, muda o send para sendFile
    res.sendFile(__dirname + "/src/index_aula04.html"); // __dirname pega toda a extensão do arquivo
});

// 5-Adicionando a página contato
app.get("/contato", function(req,res){
    res.send("Pagina de Contato");
}); 

//6-Adicionando sobre a empresa
app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
})

//7-Adicionando o blog
app.get("/blog", function(req,res){
    res.send("Blog");
})

//3 -  Inciando um servidor
app.listen(8080);