var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const db = mysql.createConnection({
  socketPath: 
  host: '127.0.0.1', // use IP to avoid Unix socket
  user: 'root',
  password: '',
  database: 'DogWalkService'
});

router.get('/dogs', async(req,res) => {
const[rows]= (await db).query(`

  `);
  res.json(rows);
});

module.exports = router;
// module.exports = db;
