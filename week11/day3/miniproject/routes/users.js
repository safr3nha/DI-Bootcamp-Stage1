const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '..', 'users.json');
const SALT_ROUNDS = 10;

async function readUsers() {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(content || '[]');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeUsers(users) {
  await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function sanitizeUser(user) {
  const { password, ...sanitized } = user;
  return sanitized;
}

router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const users = await readUsers();
    const existingUser = users.find(
      (item) => item.username === username || item.email === email
    );

    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const nextId = users.length > 0 ? Math.max(...users.map((item) => item.id)) + 1 : 1;
    const newUser = {
      id: nextId,
      name: name.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      username: username.trim(),
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await writeUsers(users);

    return res.status(201).json({
      message: 'User registered successfully.',
      user: sanitizeUser(newUser)
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to register user.' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const users = await readUsers();
    const user = users.find((item) => item.username === username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    return res.json({
      message: 'Login successful.',
      user: sanitizeUser(user)
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to login.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await readUsers();
    return res.json(users.map(sanitizeUser));
  } catch (error) {
    return res.status(500).json({ error: 'Failed to read users.' });
  }
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID.' });
  }

  try {
    const users = await readUsers();
    const user = users.find((item) => item.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    return res.json(sanitizeUser(user));
  } catch (error) {
    return res.status(500).json({ error: 'Failed to read user.' });
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID.' });
  }

  const { name, lastName, email, username, password } = req.body;
  if (!name && !lastName && !email && !username && !password) {
    return res.status(400).json({ error: 'At least one field is required to update.' });
  }

  try {
    const users = await readUsers();
    const userIndex = users.findIndex((item) => item.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const user = users[userIndex];
    const duplicate = users.find(
      (item) =>
        item.id !== id &&
        ((username && item.username === username) || (email && item.email === email))
    );
    if (duplicate) {
      return res.status(400).json({ error: 'Username or email already in use.' });
    }

    if (name !== undefined) user.name = String(name).trim();
    if (lastName !== undefined) user.lastName = String(lastName).trim();
    if (email !== undefined) user.email = String(email).trim();
    if (username !== undefined) user.username = String(username).trim();
    if (password) {
      user.password = await bcrypt.hash(password, SALT_ROUNDS);
    }

    users[userIndex] = user;
    await writeUsers(users);

    return res.json({
      message: 'User updated successfully.',
      user: sanitizeUser(user)
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update user.' });
  }
});

module.exports = router;
