import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddTask from "./components/AddTask";
import TasksManager from "./components/TasksManager";

import './App.css';

const App = () => {
  // const message = 'Hello World!'
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: true
    },
    {
      id: "2",
      title: "Continuar TCC",
      completed: false
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];

    setTasks(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId);

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <TasksManager tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
      </div>
    </>
  );
};

export default App;