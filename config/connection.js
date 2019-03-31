var mysql = require("mysql");

var connection;

// JAWSDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "MinkNoidOink",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;