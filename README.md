# SmartLib - Smart College Library Management System

SmartLib is a full-stack college library management system designed to make library operations more efficient and accessible.

## Planned technology stack

- React.js
- Node.js
- Express.js
- MongoDB

## Main objective

The main objective of SmartLib is to provide a smart, user-friendly system for managing library resources, members, borrowing, returns, and related college library operations.

## Backend setup

The backend uses Node.js, Express.js, Mongoose, and CommonJS modules. It connects to the separate `smartlib` MongoDB database during startup. The existing `campusly` database is not used or modified.

### Install dependencies

```bash
cd backend
npm install
```

### Run the backend

For production-style startup:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The server uses the `PORT` environment variable and defaults to port `5000`. The health endpoint is available at `GET http://localhost:5000/api/health`.

### MongoDB configuration

The backend reads `MONGODB_URI` from `backend/.env` and connects before starting the Express server:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/smartlib
```

`backend/.env` is local-only and must not be committed. Use `.env.example` as the configuration template. If MongoDB is unavailable or the connection string is invalid, the connection fails and the Express server does not start.

### Milestone 2 status

MongoDB integration is implemented with Mongoose. The backend verifies the database connection before serving requests, while the existing health endpoint remains available after successful startup. Database models, authentication, and library APIs are planned for later milestones.

#### Connection architecture

`src/server.js` loads dotenv, calls the reusable connection function in `src/config/db.js`, and starts Express only after `mongoose.connect()` succeeds. The connection function reads `MONGODB_URI`, connects to MongoDB, and logs the selected database name without logging credentials. A connection failure sets a non-zero process exit code and prevents the HTTP server from starting.

#### Verification

Milestone 2 was tested against the local MongoDB server at `127.0.0.1:27017`. Startup confirmed the selected database as `smartlib`, and `GET /api/health` returned HTTP 200 with the expected JSON response. An unavailable MongoDB endpoint was also tested; the backend did not start while the connection was pending/failing. The existing `campusly` database was not queried or modified.

#### Pending milestones

Database models and CRUD APIs, authentication and authorization, frontend development, automated application tests, and deployment remain pending.
