var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const db = mysql.createConnection({
  socketPath: '/var/run/mysqld/mysqld.sock',
  host: '127.0.0.1', // use IP to avoid Unix socket
  user: 'root',
  password: 'password',
  database: 'DogWalkService'
});

module.exports = router;
// module.exports = db;
