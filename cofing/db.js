const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "demo",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("connection failed", err);
  }
});

module.exports = connection;
