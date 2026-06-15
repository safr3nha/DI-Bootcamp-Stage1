const pool = require('../config/db');

async function getAllPosts() {
  const { rows } = await pool.query('SELECT id, title, content FROM posts ORDER BY id');
  return rows;
}

async function getPostById(id) {
  const { rows } = await pool.query('SELECT id, title, content FROM posts WHERE id = $1', [id]);
  return rows[0] || null;
}

async function createPost({ title, content }) {
  const { rows } = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id, title, content',
    [title, content]
  );
  return rows[0];
}

async function updatePost(id, { title, content }) {
  const { rows } = await pool.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING id, title, content',
    [title, content, id]
  );
  return rows[0] || null;
}

async function deletePost(id) {
  const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
  return rowCount > 0;
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
