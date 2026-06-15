const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'Sample task',
    description: 'This is a sample task for the Task Management API.',
    completed: false
  }
];
let nextId = 2;

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description, completed = false } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const task = {
    id: nextId++,
    title,
    description: description || '',
    completed: Boolean(completed)
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
