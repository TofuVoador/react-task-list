import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddTask from "./components/AddTask";
import TasksManager from "./components/TasksManager";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import { useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const t = JSON.parse(localStorage.getItem("tasks"));
    setTasks(t != undefined ? t : [])
  }, [])
    
  const save = (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
    save(newTasks);
  }

  const handleDescribeTask = (taskId, taskDesc) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, description: taskDesc}

      return task;
    })

    setTasks(newTasks);
    save(newTasks);
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
    save(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
    save(newTasks);
  }

  return (
    <>
      <Router>
        <div className="container">
          <Route path="/" exact>
            <>
              <Header/>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <TasksManager tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
            </>
          </Route>
          <Route path="/:taskId" exact>
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