const ToDo = require("../models/ToDo");

// Create a new task
const createTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ message: "Task is required" });
    }

    const newTask = new ToDo({
      task,
    });

    await newTask.save();
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating task" });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await ToDo.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// Delete tasks where completed = true
const deleteCompletedTasks = async (req, res) => {
  try {
    const result = await ToDo.deleteMany({ completed: true });
    res
      .status(200)
      .json({ message: `${result.deletedCount} completed tasks deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete completed tasks" });
  }
};

module.exports = { createTask, getTasks, deleteCompletedTasks };