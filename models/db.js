const Sequelize = require("Sequelize");

const sequelize = new Sequelize('nodejs', 'suhailah', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports= {
  Sequelize: Sequelize,
  sequelize: sequelize
}