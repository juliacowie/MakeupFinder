const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'l72.21.7.83',
  user     : 'mc8634',
  password : 'tablaternion',
  database : 'mc8634_MakeupFinder'
});

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

connection.end();