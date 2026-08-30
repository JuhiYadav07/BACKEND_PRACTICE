const pool = require('../config/db');

// Every function here just talks to the database - no business logic,
// no request/response handling. That belongs in the service and controller.

function findAll() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM students', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

function create({ name, email, age }) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO students (name, email, age) VALUES (?, ?, ?)',
      [name, email, age],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}

function update(id, { name, email, age }) {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?',
      [name, email, age, id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM students WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

module.exports = { findAll, create, update, remove };
