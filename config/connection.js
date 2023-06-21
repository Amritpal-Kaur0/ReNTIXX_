
//IMPORT DOTENV PACKAGE
require("dotenv").config();
//IMPORT SEQUELIZE CONSTRUCTOR FROM LIBRARY
const Sequelize = require('sequelize');
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;
// //IMPORT DOTENV PACKAGE
// require("dotenv").config();

// //IMPORT SEQUELIZE CONSTRUCTOR FROM LIBRARY
// const Sequelize = require('sequelize');

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
      
      // host: 'co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      // dialect: 'mysql',
      // port: 3306,
      // username:"az2rf91aa711fzh9",
      // password:"ociff299ig8cb09x",
      // Database:"kqh09rws7udoc379"
//     }
//   );
// }

module.exports = sequelize;
