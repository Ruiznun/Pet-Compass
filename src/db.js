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
    host: 'localhost',
    user: 'root',
    password: '', /*Insert db pass here*/
    database: 'world'
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