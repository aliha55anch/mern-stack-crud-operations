# MERN Stack CRUD Operations

A simple full-stack CRUD (Create, Read, Update, Delete) application built with the **MERN** stack: **MongoDB**, **Express.js**, **React**, and **Node.js**. The app manages a list of users, allowing you to add, view, update, and delete user records (name, email, age) through a clean Bootstrap-styled interface.

## Features

- **Create** — Add a new user via a form (`/create`)
- **Read** — View all users in a table on the home page (`/`)
- **Update** — Edit an existing user's details (`/update/:id`)
- **Delete** — Remove a user from the database
- Client-side routing with React Router
- Responsive UI styled with Bootstrap 5
- REST API backed by MongoDB (Mongoose)

## Tech Stack

### Frontend (`/client`)
- [React 19](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — Build tool and dev server
- [React Router DOM 7](https://reactrouter.com/) — Routing
- [Axios](https://axios-http.com/) — HTTP client
- [Bootstrap 5](https://getbootstrap.com/) — Styling

### Backend (`/server`)
- [Node.js](https://nodejs.org/) — Runtime
- [Express 5](https://expressjs.com/) — Web framework
- [Mongoose 6](https://mongoosejs.com/) — MongoDB ODM
- [CORS](https://www.npmjs.com/package/cors) — Cross-origin resource sharing
- [Nodemon](https://nodemon.io/) — Auto-restart during development

## Project Structure

```
MERN-Stack-CRUD-Operations/
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx             # Routes configuration
│   │   ├── Users.jsx           # List all users + delete
│   │   ├── CreateUser.jsx      # Add new user form
│   │   ├── UpdateUser.jsx      # Edit existing user form
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles (Bootstrap import)
│   ├── package.json
│   └── vite.config.js
└── server/                     # Node.js + Express backend
    ├── index.js                # Server setup + API routes
    ├── models/
    │   └── users.js            # Mongoose User schema/model
    └── package.json
```

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://127.0.0.1:27017` (e.g., via MongoDB Compass or the Mongo daemon)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MERN-Stack-CRUD-Operations.git
cd MERN-Stack-CRUD-Operations
```

### 2. Install dependencies

Open two terminals — one for the server and one for the client.

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd client
npm install
```

### 3. Run the backend

```bash
cd server
npm start
```

This runs `nodemon index.js` and starts the API on `http://localhost:3001`. You should see:

```
Connected to MongoDB
Server is Running...
```

### 4. Run the frontend

```bash
cd client
npm run dev
```

Open the URL printed in the terminal (default: `http://localhost:5173`).

## API Endpoints

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| GET    | `/`                  | Fetch all users                |
| GET    | `/getUser/:id`       | Fetch a single user by ID      |
| POST   | `/createUser`        | Create a new user              |
| PUT    | `/updateUser/:id`    | Update an existing user by ID  |
| DELETE | `/deleteUser/:id`    | Delete a user by ID            |

### Example request

**Create a user:**

```bash
curl -X POST http://localhost:3001/createUser \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com", "age": 25}'
```

## Data Model

Each user document is stored in the `crud` database under the `users` collection:

```json
{
  "name": "String",
  "email": "String",
  "age": "Number"
}
```

## Available Scripts

### Server (`server/`)

| Script      | Description                     |
| ----------- | ------------------------------- |
| `npm start` | Start the server with Nodemon   |

### Client (`client/`)

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server         |
| `npm run build`   | Build the app for production      |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run the oxlint linter             |

## Usage

1. Start MongoDB, the backend, and the frontend (see [Getting Started](#getting-started)).
2. Navigate to `http://localhost:5173` in your browser.
3. Click **Add User** to create a new record.
4. Use the **Update** button to edit a record, or **Delete** to remove it.
5. Changes are persisted to MongoDB and reflected immediately in the table.

## Developed By

Muhammad Ali Hassan

## License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).
