import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
      <div className="app-container">
        <header>
          <h1>Task Manager App</h1>
        </header>
        <div className="main-layout">
          <div className="left-side">
            <TaskForm onAddTask={handleAddTask} />
          </div>
          <div className="right-side">
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
  );
}

export default App;