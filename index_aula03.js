// 1- Incluir um módulo
 const express = require("express");


 // 2 - Clonando todo o módulo e atribuindo para a variável
const app = express();

// 4 - Indicando um página a qual quero a abrir
app.get("/", function(req,res){
    res.send("Gerenciador Financeiro");
});

// 5-Adicionando a página contato
app.get("/contato", function(req,res){
    res.send("Pagina de Contato");
}); 

//6-Adicionando sobre a empresa
app.get("/sobre-empresa", function(req,res){
    res.send("Sobre a empresa");
})

//7-Adicionando o blog
app.get("/blog", function(req,res){
    res.send("Blog");
})

//3 -  Inciando um servidor
app.listen(8080);