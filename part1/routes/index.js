var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const db = mysql.createConnection({
  host: '127.0.0.1', // use IP to avoid Unix socket
  port: 3306,
  user: 'root',
  password: 'yourpassword',
  database: 'DogWalkService'
});


module.exports = router;
