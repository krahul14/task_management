# 📋 Task Management API

A simple RESTful API for managing users and tasks (like a basic Trello/Todoist clone) using Node.js, Express, and MongoDB.

---

## 🔧 Features

- User APIs:
  - Create, get, and list users
- Task APIs:
  - Create, get, list, update, and delete tasks
  - Filter tasks by status or assigned user
- API documentation with Swagger UI

---

## 🛠 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Swagger for API Docs

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/krahul14/task_management.git
cd task_management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file at the root with the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
```

> Replace the MongoDB URI with your Atlas URI if using cloud DB.

---

## ▶️ Running the Server

```bash
npm run dev
```

The API will be live at:  
```
http://localhost:5000
```

Swagger Docs (Test API in browser):  
```
http://localhost:5000/api-docs
```

---

## 📬 API Endpoints

### Users

| Method | Endpoint        | Description            |
|--------|------------------|-----------------------|
| POST   | `/api/users`     | Create a new user     |
| GET    | `/api/users`     | Get all users         |
| GET    | `/api/users/:id` | Get a user by ID      |

### Tasks

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| POST   | `/api/tasks`       | Create a new task   |
| GET    | `/api/tasks`       | Get all tasks       |
| GET    | `/api/tasks/:id`   | Get a task by ID    |
| PUT    | `/api/tasks/:id`   | Update a task       |
| DELETE | `/api/tasks/:id`   | Delete a task       |

---

## 🧪 API Testing

You can use:
- [Postman](https://postman.com)
- Swagger UI at `/api-docs`
- `curl` from terminal

---

## ✅ Requirements Met

- Proper MVC structure
- RESTful API conventions
- MongoDB database (not in-memory)
- Error handling and validations
- API Documentation with Swagger

---

## 🙌 Author

**Kumar Rahul** – Backend Developer Intern Assignment
