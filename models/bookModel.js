const pool = require('../config/db');

function findAll() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM books', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

function create({ title, author, price }) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO books (title, author, price) VALUES (?, ?, ?)',
      [title, author, price],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}

function update(id, { title, author, price }) {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE books SET title = ?, author = ?, price = ? WHERE id = ?',
      [title, author, price, id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

module.exports = { findAll, create, update, remove };
