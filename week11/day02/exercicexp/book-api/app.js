const express = require('express');
const booksRoutes = require('./server/routes/books');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/books', booksRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Book API listening on port ${PORT}`);
});
