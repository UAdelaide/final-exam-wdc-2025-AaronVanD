var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



let db = mysql.createConnection({
  socketPath: '/var/run/mysqld/mysqld.sock',
  host: '127.0.0.1', // use IP to avoid Unix socket
  user: 'root',
  password: 'password',
  database: 'DogWalkService'
});

router.get('/api/dogs', async (req, res) =>{
  try{

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get dogs' });
  }

});

router.get('/api/walkrequests/open', async (req, res) => {
  try{

  } catch (err) {
    console.error(err);
    
  }
});


module.exports = router;
// module.exports = db;
