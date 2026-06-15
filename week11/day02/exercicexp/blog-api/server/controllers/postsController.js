const Post = require('../models/postModel');

async function getPosts(req, res, next) {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

async function getPost(req, res, next) {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
}

async function createPost(req, res, next) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const createdPost = await Post.createPost({ title, content });
    res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.updatePost(req.params.id, { title, content });

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
