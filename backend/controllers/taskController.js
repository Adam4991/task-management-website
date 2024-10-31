const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(task); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};
