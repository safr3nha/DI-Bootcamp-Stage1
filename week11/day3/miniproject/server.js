const express = require('express');
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
