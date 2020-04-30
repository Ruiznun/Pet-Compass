let mysql = require('mysql');

async function queryDb(queryText) {
   const connection = mysql.createConnection({
    host: 'petcompass-1.c42mrb3qeugz.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'bsH7b23tH!0$', /*Insert db pass here*/
    port: 3306,
    database: 'Petcompass'

   });

   console.log("Made it to querydb");

   return (new Promise(function(resolve, reject) {
    connection.query(queryText, (err, rows) => {
        if (err) reject(err);
        
        connection.end();
        console.log('Data received');
        resolve(rows);
    })
}));

};

module.exports = {
    queryDb
}
