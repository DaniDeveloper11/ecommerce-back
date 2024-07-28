const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mi_ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;