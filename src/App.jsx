import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddTask from "./components/AddTask";
import TasksManager from "./components/TasksManager";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([])

  var t = localStorage.getItem('tasks') || [];
  setTasks(t)

  const save = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handleDescribeTask = (taskId, taskDesc) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, description: taskDesc}

      return task;
    })

    setTasks(newTasks);

  }

  function handleGetTaskDescription (taskId) {
    const task = tasks.filter(task => task.id == taskId);
    return task[0];
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        description: ""
      }
    ];

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  return (
    <>
      <a>a</a>
      <Router>
        <div className="container">
          <Route path="/" >
            <>
              <Header/>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <TasksManager tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
            </>
          </Route>
          <Route path="/:taskId">
            <>
              <TaskDetails handleDescribeTask={handleDescribeTask} handleGetTaskDescription={handleGetTaskDescription}/>
            </>
          </Route>
        </div>
      </Router>
    </>
  );
};

export default App;