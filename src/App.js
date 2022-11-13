import React, { useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import TasksManager from "./components/TasksManager";

const App = () => {
  // const message = 'Hello World!'
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: true
    },
    {
      id: 2,
      title: "Continuar TCC",
      completed: false
    }
  ]);

  return (
    <>
      <div className="container">
        <AddTask/>
        <TasksManager tasks={tasks}/>
      </div>
    </>
  );
};

export default App;