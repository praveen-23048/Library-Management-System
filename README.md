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

The backend uses Node.js, Express.js, and CommonJS modules. MongoDB is not connected yet.

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
