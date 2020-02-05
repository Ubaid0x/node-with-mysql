// const mongoose = require("mongoose");
// const Config = require("./config");

// mongoose.connect(Config.db_url, {useNewUrlParser: true }, (err) => {
//   if(err) {
//     console.log("Error to connect to DB", err);
//   }
//   else {
//     console.log("Connected succeesfully");
//   }
// });

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password : 'admin',
  database: 'reviewdb'
});

connection.connect();
module.exports = connection; 