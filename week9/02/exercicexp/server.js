const express = require("express");
const app = express();

app.use(express.json());

// Simulated database
let posts = [
  { id: 1, title: "First Post", content: "Hello world!" },
  { id: 2, title: "Second Post", content: "More content here." }
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET post by ID
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// CREATE new post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// UPDATE post
app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title;
  post.content = req.body.content;

  res.json(post);
});

// DELETE post
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
