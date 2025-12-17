const mysql = require("mysql2");

console.log("🟢 db.js loaded - Using database: brainstormHQ");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "brainstormHQ",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection immediately
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully to: brainstormHQ");
    connection.release();
  }
});

module.exports = pool.promise();
