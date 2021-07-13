const Sequelize = require('sequelize');
require('dotenv').config();
// require('dotenv').config({ path: '.env.local' });

let sequelize;

// if (process.env.REACT_APP_JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.REACT_APP_JAWSDB_URL);
// } else {
sequelize = new Sequelize(
      process.env.REACT_APP_DB_NAME,
      process.env.REACT_APP_DB_USER,
      process.env.REACT_APP_DB_PASSWORD,
      {
        host: process.env.REACT_APP_DB_HOST,
        dialect: 'mysql',
        operatorsAliases: 0,
      }
);


  module.exports = sequelize;