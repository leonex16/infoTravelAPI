let mysql = require('mysql');

let dbConf = require('./dbConf.json');
let conn = mysql.createConnection(dbConf.mysql);

conn.connect(err => !err ? console.log('Conexión establecida ' + conn.threadId) : false);

module.exports = conn;