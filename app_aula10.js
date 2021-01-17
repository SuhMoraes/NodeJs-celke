const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'suhailah', '123456', {
  host: 'localhost',
  dialect:  'mysql'
});


// Atenticando o banco de dados
sequelize.authenticate().then(function(){
  console.log('Conexão realizada com sucesso');
}).catch(function(err){
  console.log('Erro ao realizar a conexão com BD: ' + err)
});

const Pagamento = sequelize.define('pagamentos', {
  // attributes
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.DOUBLE
    // allowNull defaults to true
  }
});

// Criar tabela com Sequelize
// User.sync({force: true})

// Inserir registros na tabela
Pagamento.create({
  nome: "Energia",  
  valor: 220
});