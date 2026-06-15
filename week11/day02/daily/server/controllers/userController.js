const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const SALT_ROUNDS = 10;

const register = async (req, res, next) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await userModel.createUser({
      email,
      username,
      first_name,
      last_name,
      passwordHash,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    if (error && error.message && error.message.includes('UNIQUE')) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await userModel.getUserAuthByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, email: user.email, username: user.username, first_name: user.first_name, last_name: user.last_name } });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, username, first_name, last_name } = req.body;

    const updatedUser = await userModel.updateUser({
      id,
      email,
      username,
      first_name,
      last_name,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    if (error && error.message && error.message.includes('UNIQUE')) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    next(error);
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
};
