import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTaskStatus } from '../services/taskService';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCreateTask = async () => {
    await createTask(newTask);
    fetchTasks();
    setNewTask({ title: '', description: '' });
  };

  const handleStatusChange = async (id, status) => {
    await updateTaskStatus(id, status);
    fetchTasks();
  };

  return (
    <div className="task-dashboard">
      <h1>📋 Project Management Dashboard</h1>
      <div className="task-creation">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;
