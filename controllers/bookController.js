const bookService = require('../services/bookService');
const { success, error } = require('../utils/response');

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getAllBooks();
    success(res, books);
  } catch (err) {
    error(res, err);
  }
}

async function createBook(req, res) {
  try {
    await bookService.createBook(req.body);
    success(res, { message: 'book added successfully!' }, 201);
  } catch (err) {
    error(res, err);
  }
}

async function updateBook(req, res) {
  try {
    await bookService.updateBook(req.params.id, req.body);
    success(res, { message: 'Book updated successfully!' });
  } catch (err) {
    error(res, err);
  }
}

async function deleteBook(req, res) {
  try {
    await bookService.deleteBook(req.params.id);
    success(res, { message: 'Book deleted successfully!' });
  } catch (err) {
    error(res, err);
  }
}

module.exports = { getAllBooks, createBook, updateBook, deleteBook };
