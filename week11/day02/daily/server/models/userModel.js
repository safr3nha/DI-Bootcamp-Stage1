const { db } = require('../config/db');

const createUser = ({ email, username, first_name, last_name, passwordHash }) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION');

      db.run(
        `INSERT INTO users (email, username, first_name, last_name)
         VALUES (?, ?, ?, ?);`,
        [email, username, first_name, last_name],
        function (err) {
          if (err) {
            db.run('ROLLBACK');
            return reject(err);
          }

          const userId = this.lastID;

          db.run(
            `INSERT INTO hashpwd (username, password)
             VALUES (?, ?);`,
            [username, passwordHash],
            function (insertErr) {
              if (insertErr) {
                db.run('ROLLBACK');
                return reject(insertErr);
              }

              db.run('COMMIT', (commitErr) => {
                if (commitErr) {
                  db.run('ROLLBACK');
                  return reject(commitErr);
                }

                resolve({ id: userId, email, username, first_name, last_name });
              });
            }
          );
        }
      );
    });
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT id, email, username, first_name, last_name FROM users;`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, email, username, first_name, last_name FROM users WHERE id = ?;`,
      [id],
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
};

const getUserAuthByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT u.id, u.email, u.username, u.first_name, u.last_name, h.password
       FROM users u JOIN hashpwd h ON u.username = h.username
       WHERE u.username = ?;`,
      [username],
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
};

const updateUser = ({ id, email, username, first_name, last_name }) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE users SET email = ?, username = ?, first_name = ?, last_name = ? WHERE id = ?;`,
      [email, username, first_name, last_name, id],
      function (err) {
        if (err) return reject(err);
        if (this.changes === 0) return resolve(null);
        resolve({ id, email, username, first_name, last_name });
      }
    );
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserAuthByUsername,
  updateUser,
};
