const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const dataFile = path.join(__dirname, '..', 'data', 'tasks.json');

async function readTasks() {
  try {
    const content = await fs.readFile(dataFile, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeTasks(tasks) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(tasks, null, 2), 'utf8');
}

function validateTaskInput(data, isUpdate = false) {
  const errors = [];

  if (!isUpdate || Object.prototype.hasOwnProperty.call(data, 'title')) {
    if (typeof data.title !== 'string' || data.title.trim().length === 0) {
      errors.push('Title is required and must be a non-empty string.');
    }
  }

  if (Object.prototype.hasOwnProperty.call(data, 'description')) {
    if (typeof data.description !== 'string') {
      errors.push('Description must be a string.');
    }
  }

  if (Object.prototype.hasOwnProperty.call(data, 'completed')) {
    if (typeof data.completed !== 'boolean') {
      errors.push('Completed must be a boolean.');
    }
  }

  return errors;
}

router.get('/', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find((item) => item.id === req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const errors = validateTaskInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const tasks = await readTasks();
    const newTask = {
      id: Date.now().toString(),
      title: req.body.title.trim(),
      description: typeof req.body.description === 'string' ? req.body.description.trim() : '',
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const errors = validateTaskInput(req.body, true);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const tasks = await readTasks();
    const index = tasks.findIndex((item) => item.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTask = {
      ...tasks[index],
      title: req.body.title !== undefined ? req.body.title.trim() : tasks[index].title,
      description: req.body.description !== undefined ? req.body.description.trim() : tasks[index].description,
      completed: req.body.completed !== undefined ? req.body.completed : tasks[index].completed,
      updatedAt: new Date().toISOString()
    };

    tasks[index] = updatedTask;
    await writeTasks(tasks);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex((item) => item.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const [deleted] = tasks.splice(index, 1);
    await writeTasks(tasks);
    res.json({ message: 'Task deleted', task: deleted });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
