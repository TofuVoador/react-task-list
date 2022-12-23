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
  const [tasks, setTasks] = useState([])    //create tasks array

  useEffect(() => {   //load persistent data
    const t = JSON.parse(localStorage.getItem("tasks"));
    setTasks(t != undefined ? t : [])
  }, [])
    
  const save = (newTasks) => {    //save persistent data
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const handleTaskClick = (taskId) => {   //change task status
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
    save(newTasks);
  }

  const handleChangeTask = (taskId, taskDesc, taskStart) => {    //change task data
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, description: taskDesc, start: taskStart}

      return task;
    })

    newTasks.sort(function (a, b) {   //sort task by time
      return a.start.localeCompare(b.start);
    });

    setTasks(newTasks);
    save(newTasks);
  }

  function handleGetTaskByID (taskId) {    //get task by id
    const task = tasks.filter(task => task.id == taskId);
    return task[0];
  }

  const handleTaskAddition = (taskTitle) => {   //add new task
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        description: "",
        start: "08:00"
      }
    ];

    newTasks.sort(function (a, b) {   //sort task by time
      return a.start.localeCompare(b.start);
    });

    setTasks(newTasks);
    save(newTasks);
  }

  const handleTaskDelete = (taskId) => {    //delete task by id
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
              <TaskDetails handleChangeTask={handleChangeTask} handleGetTaskByID={handleGetTaskByID}/>
            </>
          </Route>
        </div>
      </Router>
    </>
  );
};

export default App;