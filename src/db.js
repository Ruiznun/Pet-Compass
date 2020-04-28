let mysql = require('mysql');
/*
class Db {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'ReduxHacker42!',
            database: 'world'
        });
    }
    connectToDb() {
        this.connection.connect(function(err) {
            if (err) {
                return console.error('error: ' + err.message);
            }
            console.log('Connected to the MySQL server.');
        })
    }

    disconnectFromDb() {
        this.connection.end();
    }

    queryDb(queryText) {
        this.connection.query(queryText, (err, rows) => {
            if (err) throw err;

            console.log('Data receieved');
            console.log('rows');
            return(rows);
        })
    }

}
*/
async function queryDb(queryText) {
   const connection = mysql.createConnection({
    host: 'petcompass-1.c42mrb3qeugz.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'bsH7b23tH!0$!', /*Insert db pass here*/
    port: 3306, 
    database: ''
   });

   console.log("Made it to querydb");

   return (new Promise(function(resolve, reject) {
    connection.query(queryText, (err, rows) => {
        if (err) reject(err);
        
        //connection.end();
        console.log('Data received');
        resolve(rows);
    })
}));

};

module.exports = {
    queryDb
}
