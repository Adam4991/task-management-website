import React from 'react';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🗂️ Task Dashboard</h1>
        <p>Manage your tasks efficiently and effectively 🚀</p>
      </header>
      <main>
        <TaskDashboard />
      </main>
    </div>
  );
}

export default App;
