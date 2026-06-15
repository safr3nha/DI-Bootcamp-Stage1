const books = require('../models/bookModel');

function getAllBooks(req, res) {
  res.json(books);
}

function getBookById(req, res) {
  const bookId = Number(req.params.bookId);
  const book = books.find((item) => item.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
}

function createBook(req, res) {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'Title, author, and publishedYear are required' });
  }

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};
