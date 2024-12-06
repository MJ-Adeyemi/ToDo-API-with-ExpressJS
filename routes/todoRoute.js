const {
  createTask,
  getTasks,
  deleteCompletedTasks,
} = require("../controllers/ToDoController");
const express = require("express");
const router = express.Router();

// Route to create a task
router.post("/tasks", createTask);

// Route to get all tasks
router.get("/tasks", getTasks);

// Route to delete completed tasks
router.delete("/tasks/completed", deleteCompletedTasks);

module.exports = router;