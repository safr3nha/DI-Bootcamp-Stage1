const express = require('express');
const postsRouter = require('./server/routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Blog API listening on port ${PORT}`);
});
