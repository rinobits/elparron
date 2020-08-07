// packages
const mysql = require('mysql');
// imports & conts
const {config} = require('../../config');
const {db, user, password, host} = config;

const mysqlConnection = mysql.createConnection({
  host:     host,
  user:     user,
  password: password,
  database: db,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('<!> D B   L O A D E D <!>');
  }
});

module.exports = mysqlConnection;
