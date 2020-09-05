// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'reviewservice',
//   multipleStatements: true
// });

// connection.connect(err => {
//   if (err) {
//     console.log(err);
//   }
// });
const cassandra = require('cassandra-driver');
const connection = new cassandra.Client({contactPoints: ['localhost'],
keyspace: 'reviews',
localDataCenter: 'datacenter1',
elasticsearch: {
  apiVersion: '7.2',
  sniffOnStart: false,
  requestTimeout: 60000
},
});




module.exports.connection = connection;