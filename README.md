<h1 align='center'>O que é Node.js?</h1>

<br />

 <li>Node.js não é uma linguagem de programação. Você programa utilizando a linguagem JavaScript.</li>
 <li> O Node é uma plataforma construída sob o motor JavaScript do Google Chrome  que é o Javacript V8 VM.</li>
 <li>Node.js é uma tecnologia assíncrona. Por ser assíncrona, ela trabalha em única Thread de execução.</li>
 <li>Permite trabalhar no front-end e no back-end.</li>
 <br />

 <h2 align='center'> 📚 Conhecimentos adquiridos 📚</h2>
 <hr>
 <br />

 <h3> ✅ Aula 1 - Como usar o Node.js na prática.</h3>
 <br />

 <h3> ✅ Aula 2 - Criação de um servidor HTTP na máquina e imprimir o texto no navegador usando o Node.</h3>

 <li>Criação de um servidor. `createServer`</li>
 <li>Indicação da porta.</li>
 <li>Impressão do texto no navegador.</li>
 <br/>

  <h3>✅ Aula 3 - Instalação do Express e criação de rotas no Node.js</h3>
    <li>O Framework Express é um framework minimalista. Ele veio para suprir uma necessidade, que é trabalhar com rotas.</li>
    <li>Instalando o Express:<br/>
      No Prompt de Comando, digite: <br/>
    $ npm install express --save</li>

  <br />

  <h3>✅ Aula 4 -Como Intalar o Nodemon no Node.js para o servidor ser recarregado automaticamente</h3>

  <h3>✅ Aula 5 -Como carregar arquivo Html no Node.js</h3>

<h3>✅ Aula 6 -  Node + MySQL + Workbench - Como conectar o Node com banco de dados</h3>

<p>
    Acessar o banco de dados:
  mysql -h 'servidor' -u 'usuario' -p
  Exemplo: mysql -h localhost -u root -p
  Em seguida digitar a senha do usuário root no banco de dados.
</p>

<p>
  Listar as base de dados:
  SHOW DATABASES;
</p>

<p>
  Criar base de dados:
  CREATED DATABASE 'nome_da_base_dados';
  Exemplo: CREATED DATABASE bd_nodejs;
</p>

<p>
    Acessar a base de dados:
    USE 'nome_da_base_dados';
     Exemplo: USE bd_nodejs;
</p>

<p>
  Criar nova tabela:
  CREATED TABLE 'nome_tabela' (coluna1, coluna2,...);
  Exemplo: CREATED TABLE users (nome VARCHAR(220), email VARCHAR(220);
</p>

<p>
  Listar as tabelas da base de dados:
  SHOW TABLES;
</p>

<p>
  Cadastrar registro no banco de dados:
  INSERT INTO 'nome_tabela' (coluna1, coluna2) VALUES ('valor1_coluna1', 'valor_coluna2');
  Exemplo: INSERT INTO users (nome, email) VALUES ('Node', 'nodejs@gmail.com.br');
<br>
<br>
  Listar registros da tabela:
  SELECT * FROM 'nome_tabela';
  Exemplo: SELECT * FROM users;
<br>
<br>
  Criar usuário: 
  CREATE USER 'novousuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
  CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';
<br>
<br>
  Liberar permissão para acessar a base de dados:
  GRANT ALL PRIVILEGES ON * . * TO 'foo'@'localhost';
<br>
<br>
  Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilégios.
  FLUSH PRIVILEGES;
</p>
 
 <h3>✅ Aula 7 -  Como inserir dados com Node no banco de dados</h3>
 <h3>✅ Aula 8 -  Como cadastrar com Node.js no banco de dados</h3>
 <h3>✅ Aula 9 -  Como editar registro no banco de dados MySQL com Node</h3>  
 <h3>✅ Aula 10 -  Como instalar e usar o Sequelize no Node.js</h3>
 <h3>✅ Aula 11 - Como instalar o Handlebars no Node e criar o layout padrão para o projeto  </h3>
<h3>✅ Aula 12 - Como criar o formulário com Node e salvar no banco de dados </h3>