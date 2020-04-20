var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pet_compass',
  password : 'Bigbytes2020',
  database: 'sql_petcompass'
});

//connect to database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  //important work happens in here
  // SOME CODE HERE USUALLY DATABASE WORK
  console.log('connected as id ' + connection.threadId);
});

//diconnect from database
connection.end(function(err){
  if (err){
    return console.log('error: '+ err.message);
  }
  console.log('Closed the database connection');
});