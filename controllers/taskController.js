const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTasks = async (req, res) => {
  const { status, assignedUserId } = req.query;
  const filter = {};
  if (status) filter.status = status;
  if (assignedUserId) filter.assignedUserId = assignedUserId;

  const tasks = await Task.find(filter).populate('assignedUserId');
  res.status(200).json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('assignedUserId');
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.status(200).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.status(200).json({ message: 'Task deleted successfully' });
};
