# Task Management API

A simple Task Management API built with Express for the mini project.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

- `GET /api/tasks` - List all tasks
- `GET /api/tasks/:id` - Get a task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Task payload example

```json
{
  "title": "Finish mini project",
  "description": "Build the Task Management API",
  "completed": false
}
```
