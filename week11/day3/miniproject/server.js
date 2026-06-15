const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task Management API running on http://localhost:${PORT}`);
});
