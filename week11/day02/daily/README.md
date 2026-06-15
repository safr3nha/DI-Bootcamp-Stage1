# User Management API

Simple Express.js API for registration, login, and user management.

## Install

1. `npm install`
2. `npm start`

## API endpoints

- `POST /api/register`
- `POST /api/login`
- `GET /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`

Passwords are hashed with bcrypt and stored in a separate `hashpwd` table.
