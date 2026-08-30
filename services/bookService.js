const bookModel = require('../models/bookModel');

async function getAllBooks() {
  return bookModel.findAll();
}

async function createBook({ title, author, price }) {
  if (!title || !author) {
    throw { status: 400, message: 'Title and author are required' };
  }
  return bookModel.create({ title, author, price });
}

async function updateBook(id, { title, author, price }) {
  if (!title || !author) {
    throw { status: 400, message: 'Title and author are required' };
  }
  return bookModel.update(id, { title, author, price });
}

async function deleteBook(id) {
  return bookModel.remove(id);
}

module.exports = { getAllBooks, createBook, updateBook, deleteBook };
