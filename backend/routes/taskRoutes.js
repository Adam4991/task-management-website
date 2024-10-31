const express = require('express');
const { getTasks, createTask, updateTaskStatus } = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', getTasks);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTaskStatus);

module.exports = router;
