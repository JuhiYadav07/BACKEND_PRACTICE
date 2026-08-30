const mysql = require('mysql2');
require('dotenv').config();

// Using a pool instead of a single connection so multiple requests
// can be handled at once without waiting on one connection.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('MySQL database is connected');
  connection.release();
});

module.exports = pool;
