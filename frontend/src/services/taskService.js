import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  return await axios.get(API_URL);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

export const updateTaskStatus = async (id, status) => {
  return await axios.put(`${API_URL}/${id}`, { status });
};
