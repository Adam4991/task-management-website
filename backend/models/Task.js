const mongoose = require('mongoose');

// 📝 Define the schema for a Task
const TaskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true     
  },
  description: { 
    type: String       
  },
  status: { 
    type: String, 
    enum: ['Pending', 'InProgress', 'Completed'], 
    default: 'Pending' 
  },
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Task', TaskSchema);
