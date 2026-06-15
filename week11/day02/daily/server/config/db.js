const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '..', 'data', 'users.db');

const db = new sqlite3.Database(dbPath);

const init = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`PRAGMA foreign_keys = ON;`);

      db.run(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE,
          username TEXT UNIQUE,
          first_name TEXT,
          last_name TEXT
        );`
      );

      db.run(
        `CREATE TABLE IF NOT EXISTS hashpwd (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE,
          password TEXT,
          FOREIGN KEY(username) REFERENCES users(username) ON DELETE CASCADE
        );`
      );

      resolve();
    });
  });
};

module.exports = { db, init };
