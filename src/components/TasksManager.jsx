import React from "react";
import Task from "./Task";

const TasksManager = ({tasks, handleTaskClick, handleTaskDelete}) => {
  return (
    <>
      {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} key={task.id}/>)}
    </>
  );
};

export default TasksManager;