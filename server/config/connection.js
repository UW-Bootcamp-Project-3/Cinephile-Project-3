const Sequelize = require('sequelize');
require('dotenv').config();
// require('dotenv').config({ path: '.env.local' });

let sequelize;


sequelize = new Sequelize(
  'pdai0wxfohmy8l28',
  'mlxno0ooz781y6wr',
  'amkbhqy5b3ho8ike',
  {
    host: 'pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    operatorsAliases: 0,
  }
);

  module.exports = sequelize;