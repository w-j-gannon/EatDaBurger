// Import MySQL connection.
var connection = require("../config/connection.js");

//Helper function for ? use
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// SQL helper function for object key/value pairs
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {

      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table + " (";
    queryString += cols.toString() + ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length) + ");";
    connection.query(queryString, vals, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table + " SET ";
    queryString += objToSql(objColVals) + " WHERE ";
    queryString += condition;
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;