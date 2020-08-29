const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reviewservice',
  multipleStatements: true
});

connection.connect(err => {
  if (err) {
    console.log(err);
  }
});

module.exports.connection = connection;